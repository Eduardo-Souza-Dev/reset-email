const connection = require('../server');
const bcrypt = require('bcrypt');

async function CreateUserServices(nome,email,senha){
  try{
    const salt = await bcrypt.genSalt(10);
    const hashSenha = await bcrypt.hash(senha, salt);
    let insertSql = `INSERT INTO r_user_register (name,email,password,date_created) VALUES (?,?,?, NOW())`;
    const [results, fields] = await connection.promise().query(insertSql,[nome,email,hashSenha]);
    const response = "Cadastrado"

    return response

  }catch(err){
    return err
  }
   
}

module.exports = CreateUserServices;