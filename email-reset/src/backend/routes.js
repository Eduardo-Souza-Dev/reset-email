const cors = require('cors');
const express = require('express');
const CreateUserController = require('./controllers/CreateUserController');
const ControllerVerifyEmail = require('./controllers/ControllerVerifyEmail.js');

const app = express();
app.use(express.json());
app.use(cors())


app.post('/create/user',async (req, res)=>{
  await CreateUserController(req,res)
})

app.post('/verify/:email', async (req, res) =>{
  await ControllerVerifyEmail(req.params.email, res);
})
  
app.listen(3333, () => {
  console.log('Servidor backend rodando na porta 3333');
});