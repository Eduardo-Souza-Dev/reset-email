const connection = require("../server");

async function FoundUserbyEmail(email){
if(!email){
    throw new Error("E-mail incorreto")
}

if(email !== null || email !== undefined){
    let verificaEmail = `SELECT * FROM register WHERE email = ?` 
    connection.query(verificaEmail,[email], (err, results)=>{
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