const CreateUserServices = require('../services/CreateUserServices');


async function CreateUserController(request,response){

    const {nome,email,senha} = request.body

    const values = await CreateUserServices(nome,email,senha);
    console.log("VAlor do values " + values)

    if(!values){
        return response.status(400).json({message: 'Email já cadastrado'})
    }else{
        return response.status(200).json({success: 'Usuário cadastrado com sucesso!'});
    }

}

module.exports = CreateUserController

