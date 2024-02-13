const CreateServicesNewPassword = require('../services/CreateServicesNewPassword')
async function ControllerNewPassword(request,response){
    const { id,cod_reset } = request.body;

    const values = await CreateServicesNewPassword(id,cod_reset);
    try{
    let valuesMessage = JSON.parse(values);

    if(valuesMessage.message === "Erro na senha"){
        return response.status(400).json({message:"Erro na senha"})
    }else if(valuesMessage.message === "Nova senha inserida com sucesso"){
        return response.status(200).json({message:"Nova senha inserida", values:valuesMessage.id_user})
    }

    }catch(err){
        return err
    }

}

module.exports = ControllerNewPassword