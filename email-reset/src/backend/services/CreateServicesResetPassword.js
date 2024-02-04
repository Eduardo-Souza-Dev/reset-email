const connection = require('../server');
const bcrypt = require('bcrypt');

async function CreateServiceResetPassword(id,cod){

  try{
    // if(!cod || !id){
    //    throw new Error("Erro no código");
    // }

    console.log(id)
    console.log(cod)

    let selectSql = `SELECT id_user_register,cod_reset FROM r_user_register  WHERE id_user_register = ${id}`;
    const [results, fields] = await connection.promise().query(selectSql);
    console.log(results)
    if(results){
      //Compara valor do codigo e o valor do hash recebido no banco de dados
      const resultCod = bcrypt.compare(cod,results)
      if(resultCod === true){
        //Retorna um status okay e libera para colocar a nova senha
      }
    }

    return results

  }catch(err){
    return err
  }
   
}

module.exports = CreateServiceResetPassword;