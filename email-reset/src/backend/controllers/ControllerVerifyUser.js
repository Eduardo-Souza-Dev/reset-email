const CreateVerifyUser = require('../services/CreateVerifyUser');


async function ControllerVerifyUser(request,response){

    const {email,senha} = request.body
    let values =  await CreateVerifyUser(email,senha);

    if(values == "Senha incorreta!"){
         response.status(400).json({message: 'Usuário logado com sucesso'})//Retorna que o login foi feito com sucesso
    }else if(values == "Senha correta!"){
         response.status(200).json({message: 'Erro ao logar'});//Retorna erro no login
    }else if(values == "Usuario não encontrado"){
     response.status(200).json({message: 'Usuario não encontrado'});//Retorna erro no login
}

}

module.exports = ControllerVerifyUser;

