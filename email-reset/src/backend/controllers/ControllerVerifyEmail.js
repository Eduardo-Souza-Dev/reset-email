const CreateVerifyServicesEmail = require("../services/CreateVerifyServicesEmail");

async function ControllerVerifyEmail(request,response){
    const values = await CreateVerifyServicesEmail(request,response);

    if(values == null){
        return response.status(400).json({message:"Email não encontrado!"})
    }else{
        return response.status(200).json(values)
    }

}

module.exports = ControllerVerifyEmail