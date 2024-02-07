const CreateServiceResetPassword = require('../services/CreateServicesResetPassword.js')

async function ControllerResetPassword(request,response){
    const { id,cod_reset } = request.body;

    const values = await CreateServiceResetPassword(id,cod_reset);
    console.log("Valor de values: " + values)
    if(values === "Invalid Hash!"){
        return response.status(400).json({message:"Código inválido"})
    }else if(values === "Hash okay"){
        return response.status(200).json({message:"Código válido"})
    }

}

module.exports = ControllerResetPassword