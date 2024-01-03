const connection = require('../server');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

function CallError(){
  const error = {
    message:'Erro ao fazer a requisição'
  }
  return error
}

function CallSolved(){
  const data = {
    message:'Requisição feita com sucessdo!'
  }
  return data
}


async function CreateUserServices(nome,email,senha){
    const hashSenha = bcrypt.hashSync(senha,salt);
    let insertSql = `INSERT INTO register (nome,email,senha) VALUES (?,?,?)`
    const values = () =>{ 
     
      connection.query(insertSql, [nome, email, hashSenha],  (err, result) => {
       if(result){ 
          // console.log(result)
          return result; 
        }else{
          // console.log(err)
          return err
        }
      });
     }
    

     return values()
   
    
}

module.exports = CreateUserServices;