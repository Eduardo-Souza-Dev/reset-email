const CreateVerifyServicesEmail = require("../services/CreateVerifyServicesEmail");

async function ControllerVerifyEmail(request,response){
    const values = await CreateVerifyServicesEmail(request,response);

    if(values == null){
        return response.status(400).json({message:"Erro ao enviar código"})
    }else{
        return response.status(200).json({message:"Código enviado com sucesso!"})
    }

}

module.exports = ControllerVerifyEmail