const connection = require('../server');
const bcrypt = require('bcrypt');

async function CreateUserServices(nome,email,senha){
  try{
    const salt = await bcrypt.genSalt(10);
    const hashSenha = await bcrypt.hash(senha, salt);
    
    let insertSql = `INSERT INTO register (nome,email,senha) VALUES ('${nome}','${email}','${hashSenha}')`;
    const [results, fields] = await connection.query(insertSql);

  }catch(err){
    return err
  }
   

   
}

module.exports = CreateUserServices;