const connection = require('../server');
const bcrypt = require('bcrypt');
require('dotenv').config()


async function CreateVerifyUser(email,senha){
    try{
    if(email === ''){
        throw new Error("E-mail vazio!");
    }

    if(senha === ''){
        throw new Error("Senha vazia!");
    }

    let verificaEmail = `SELECT * FROM r_user_register WHERE email = ?` 
    const [results, fields] = await connection.promise().query(verificaEmail,[email])
     let message;
     if(results.length === 0){
        return message = "Usuario não encontrado";
     }else{
        
        let userSenha = results[0].password;

        let resultSenha = await bcrypt.compare(senha,userSenha);

        //Esse if basicamente verifica se a senha digitada é a compátivel
        if(resultSenha === false){
            message = "Senha incorreta!";
        }else{
            message = "Senha correta!";
        }
    
        return message; 
     } 
      
  }catch(err){
    return err;
  }


}

module.exports = CreateVerifyUser