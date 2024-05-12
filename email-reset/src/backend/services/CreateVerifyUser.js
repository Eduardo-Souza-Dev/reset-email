const connection = require('../server');
const bcrypt = require('bcrypt');
require('dotenv').config()


async function CreateVerifyServicesEmail(email,senha){
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
        
        let userSenha = results[0].senha;
        let resultSenha = await bcrypt.compare(senha,userSenha);

        //Esse if basicamente verifica se a senha digitada é a compátivel
        if(resultSenha == true){
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

module.exports = CreateVerifyServicesEmail