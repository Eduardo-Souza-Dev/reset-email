const CreateServicesNewPassword = require('../services/CreateServicesNewPassword')
async function ControllerNewPassword(request,response){
    const { id,password } = request.body;

    const values = await CreateServicesNewPassword(id,password);
    console.log(values)
    try{
    let valuesMessage = JSON.parse(values);

    if(valuesMessage.message === "Erro na senha"){
        return response.status(400).json({message:"Erro na senha"})
    }else if(valuesMessage.message === "Nova senha inserida com sucesso"){
        return response.status(200).json({message:"Nova senha inserida", values:valuesMessage.id_user})
    }

    }catch(err){
        console.log(err)
        return err
    }

}

module.exports = ControllerNewPassword