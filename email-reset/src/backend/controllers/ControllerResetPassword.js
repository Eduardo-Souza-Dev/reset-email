const CreateServiceResetPassword = require('../services/CreateServicesResetPassword.js')

async function ControllerResetPassword(request,response){
    const { id,cod_reset } = request.body;

    const values = await CreateServiceResetPassword(id,cod_reset);
    if(values !== ""){
    let valuesMessage = JSON.parse(values);

    if(valuesMessage.message === "Invalid Hash!"){
        return response.status(400).json({message:"Código inválido"})
    }else if(valuesMessage.message === "Hash okay"){
        return response.status(200).json({message:"Código válido", values:valuesMessage.id_user})
    }

    }else{
        return response.status(400).json({message:"Código vazio"})
    }

}

module.exports = ControllerResetPassword