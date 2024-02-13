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

    let updateSql = `UPDATE r_user_register SET password  = ${passwordHash} WHERE id_user_register = ${id}`;
    const [results, fields] = await connection.promise().query(updateSql);
  
    if(results){
      //Retorna okay e nova senha com hash inserida ao banco
      let valuesOkay = {
        message: "Nova senha inserida com sucesso"
      }

      return valuesOkay;
    }

  }catch(err){
    return valuesWrong;
  }
   
}

module.exports = CreateServicesNewPassword;