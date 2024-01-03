const connection = require('../server');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const { Resend } = require("resend");

async function CreateVerifyServicesEmail(email){
    
    if(!email){
        throw new Error("E-mail incorreto")
    }

    let verificaEmail = `SELECT * FROM register WHERE email = '${email}'` 
    connection.query(verificaEmail, (err, results)=>{
      if(results){
        //Faz o timeout para expirar o código de reset e consequentemente deixar vazio
       
        if(results[0].codigo_reset === null){
          console.log("Aqui foi")
          insertCodigo(results[0].id_register, email)
        }
        else{
          console.log("Aqui foi no outro if")
        }
      }else{
       
        console.log("Not results found")
       
      }
        
    }).on('error', function(err){
      console.log(err)
    })


}

async function insertCodigo(id,email){
let codigo = ''
let i = 0;
while(i < 4){
  let codigoArr = Math.floor(Math.random() * 10 + i)
  codigo += codigoArr
  i++
}
let codigoHash = bcrypt.hashSync(codigo, salt)


let queryInsert = `UPDATE register SET codigo_reset = '${codigoHash}', time_codigo = NOW() WHERE id_register = ${id} `

connection.query(queryInsert, (err, results) =>{
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