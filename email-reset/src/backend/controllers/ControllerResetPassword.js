const CreateServiceResetPassword = require('../services/CreateServicesResetPassword.js')

async function ControllerResetPassword(request,response){
    const { id,cod_reset } = request.body;
    const values = await CreateServiceResetPassword(id,cod_reset);
    return response.json(values);

}

module.exports = ControllerResetPassword