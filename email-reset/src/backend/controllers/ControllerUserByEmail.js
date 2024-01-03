const FoundUserbyEmail = require("../services/FoundUserByEmail");


async function ControllerUserByEmail(request,response){
    const values = await FoundUserbyEmail(request);
    return response.json(values);

}

module.exports = ControllerUserByEmail