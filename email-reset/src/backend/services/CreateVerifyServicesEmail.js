const connection = require('../server');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const { Resend } = require("resend");


function ResetCode(id){
  //Define o código como NULL a medida em que o tempo é expirado
  let queryInsert = `UPDATE register SET codigo_reset = NULL WHERE id_register = ${id} `

  connection.query(queryInsert, (err, results) =>{
    if(results){
    return results 
    }
   
  }).on('error', (err) =>{
    console.log(err);
  })
}

async function CreateVerifyServicesEmail(email){
    
    if(!email){
        throw new Error("E-mail incorreto")
    }

    let verificaEmail = `SELECT * FROM r_user_register WHERE email = '${email}'` 
    connection.query(verificaEmail, (err, results)=>{
      if(results[0] !== null){
        //Faz o timeout para expirar o código de reset e consequentemente deixar vazio
          insertCodigo(results[0].id_user_register, email);
          setTimeout(() =>{
            ResetCode(results[0].id_user_register)
          },1500)
      }else{

        console.log("Email not found!");
        return;
      }
        
    })


}

async function insertCodigo(id,email){
let codigo = ''
let i = 0;

//Gerando 4 números aleatórios de 1 a 10
while(i < 4){
  let codigoArr = Math.floor(Math.random() * 10 + i)
  codigo += codigoArr
  i++
}
let codigoHash = bcrypt.hashSync(codigo, salt)


let queryInsert = `UPDATE register SET codigo_reset = '${codigoHash}' WHERE id_register = ${id} `

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
  }
 
}).on('error', (err) =>{
  console.log(err)
})
}

module.exports = CreateVerifyServicesEmail