const connection = require('../server');
const bcrypt = require('bcrypt');

async function CreateServiceResetPassword(id,cod){
  
  let valuesWrong = {
    message: "Invalid Hash!"
  }

  try{
    if(!cod || !id){
       return JSON.stringify(valuesWrong);
    }

    let selectSql = `SELECT id_user_register,cod_reset FROM r_user_register  WHERE id_user_register = ${id}`;
    const [results, fields] = await connection.promise().query(selectSql);
  
    if(results){
      //Compara valor do codigo e o valor do hash recebido no banco de dados
      const resultCod = await bcrypt.compare(cod,results[0].cod_reset)
      let valuesOkay = {
        message: "Hash okay",
        id_user:results[0].id_user_register
      }
      
      if(resultCod === true){
        //Retorna um status okay e libera para colocar a nova senha
        return JSON.stringify(valuesOkay);
      }else{
        //Retorna erro e barra para colocar a nova senha
        return JSON.stringify(valuesWrong)
      }
    }

    return results

  }catch(err){
    return err
  }
   
}

module.exports = CreateServiceResetPassword;