const connection = require('../server');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

async function CreateServicesNewPassword(id,password){
  let valuesWrong = {
        message: "Erro na senha"
  }

  try{
    if(!id || !password){
       return JSON.stringify(valuesWrong);
    }

    let passwordHash = bcrypt.hashSync(password, salt)

    let updateSql = `UPDATE r_user_register SET password  = ? WHERE id_user_register = ?`;
    const [results, fields] = await connection.promise().query(updateSql,[passwordHash,id]);
  
    if(results){
      //Retorna okay e nova senha com hash inserida ao banco
      let valuesOkay = {
        message: "Nova senha inserida com sucesso"
      }

      return JSON.stringify(valuesOkay);
    }

  }catch(err){
    console.log(err)
    return JSON.stringify(valuesWrong);
  }
   
}

module.exports = CreateServicesNewPassword;