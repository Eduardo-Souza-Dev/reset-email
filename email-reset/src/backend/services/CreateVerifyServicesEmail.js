const connection = require('../server');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const { Resend } = require("resend");
require('dotenv').config()
let KEY = process.env.TZ;

console.log("Valor do process " + KEY)

function ResetCode(id){
  //Define o código como NULL a medida em que o tempo é expirado
  let queryInsert = `UPDATE r_user_register SET cod_reset = NULL WHERE id_user_register = ${id} `

  connection.query(queryInsert, (err, results) =>{
    if(results){
    return results 
    }
   
  }).on('error', (err) =>{
    console.log(err);
  })
}

async function CreateVerifyServicesEmail(email){
    try{
    if(!email){
        throw new Error("E-mail incorreto");
    }

    let verificaEmail = `SELECT * FROM r_user_register WHERE email = '${email}'` 
    const [results, fields] = await connection.promise().query(verificaEmail)
      //Faz o timeout para expirar o código de reset e consequentemente deixar vazio
     if(results == ""){
        return null;
     }else{
        insertCodigo(results[0].id_user_register,results[0].email);
        setTimeout(() =>{
          ResetCode(results[0].id_user_register)
        },500000)// 5 minutos e faz o reset do código
        return results;
     } 
      
  }catch(err){
    return err;
  }


}

async function insertCodigo(id,email){
let codigo = ''
let i = 0;

//Gerando 4 números aleatórios de 0 a 9
while(i < 4){
  let codigoArr = Math.floor(Math.random() * 9)
  codigo += codigoArr
  i++
}
let codigoHash = bcrypt.hashSync(codigo, salt)


let queryInsert = `UPDATE r_user_register SET cod_reset = '${codigoHash}' WHERE id_user_register = ${id} `

connection.query(queryInsert, (err, results) =>{
  //Chave que não deveria ficar exposta mas é só teste kk
  const resend = new Resend('re_2kpztcgT_FiHaCrNSuprhyTqpzv6rbX1w');
  if(results){
    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: `${email}`,
      subject: 'Confirmação de reset de senha',
      html: `<p>Código de reset: <strong>${codigo}</strong></p>`
    });

    return results
  }else{
    return err
  }
})
}

module.exports = CreateVerifyServicesEmail