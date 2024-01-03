const connection = require("../server");

async function FoundUserbyEmail(email){
if(!email){
    throw new Error("E-mail incorreto")
}
console.log("O email está aqui: " + email)
if(email !== null || email !== undefined){
    let verificaEmail = `SELECT * FROM register WHERE email = '${email}'` 
    connection.query(verificaEmail, (err, results)=>{
        console.log("Erro aqui aqui: " + results)
        return results
     
    }).on('error', function(err){
        console.log(err)
    })
}

else{
    console.log("Email inexistente!")
}
}



module.exports = FoundUserbyEmail