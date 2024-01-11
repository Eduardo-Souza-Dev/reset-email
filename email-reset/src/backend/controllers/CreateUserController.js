const CreateUserServices = require('../services/CreateUserServices');
const connection = require('../server');


async function CreateUserController(request,response){

    const {nome,email,senha} = request.body

    let values =  await CreateUserServices(nome,email,senha);
    console.log( values)

    if(values.code == "ER_DUP_ENTRY"){
         response.status(400).json({message: 'Email já cadastrado'})
    }else{
         response.status(200).json({success: 'Usuário cadastrado com sucesso!'});
    }

}

module.exports = CreateUserController

