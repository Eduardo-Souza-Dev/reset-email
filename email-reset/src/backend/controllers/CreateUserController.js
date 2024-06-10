const CreateUserServices = require('../services/CreateUserServices');
const connection = require('../server');


async function CreateUserController(request,response){

    const {nome,email,senha} = request.body
    let values =  await CreateUserServices(nome,email,senha);
    
    if(values.code == "ER_DUP_ENTRY"){
         response.status(400).json({message: 'Email já cadastrado'})//Retorna erro caso tenha email já cadastrado
    }else if(values == "Cadastrado"){
         response.status(200).json({message: 'Usuário cadastrado com sucesso!'});
    }

}

module.exports = CreateUserController

