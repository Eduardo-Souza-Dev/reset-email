const CreateVerifyServicesEmail = require("../services/CreateVerifyServicesEmail");

async function ControllerVerifyEmail(request,response){
    const values = await CreateVerifyServicesEmail(request);
    return response.json(values);

}

module.exports = ControllerVerifyEmail