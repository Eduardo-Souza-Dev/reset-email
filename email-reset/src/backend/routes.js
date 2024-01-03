const cors = require('cors');
const express = require('express');
const CreateUser = require('./controllers/CreateUserController');
const VerifyEmail = require('./controllers/ControllerVerifyEmail.js');

const app = express();
app.use(express.json());
app.use(cors())


app.post('/create/user',async (req, res)=>{
  await CreateUser(req,res)
})

app.get('/verify/:email', async (req, res) =>{
  await VerifyEmail(req.params.email, res);
})
  
app.listen(3333, () => {
  console.log('Servidor backend rodando na porta 3333');
});