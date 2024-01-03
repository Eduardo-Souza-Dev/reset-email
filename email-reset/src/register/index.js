import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  let data = {
    name: name,
    email: email,
    senha: senha,
  }

  let dataJSON = JSON.stringify(data)

   function sendInfo(e){
    e.preventDefault()
    fetch(`http://localhost:3333/create/user`,{
      method:"POST",
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body:JSON.stringify(data),
      mode: "cors"
    })
    .then(response => {
      console.log(response)
      response.json()
    })
    .then((data) =>{
      console.log(data)
      toast('Usuário cadastrado com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
        type:"success"
        })
    })
    .catch(error =>{
      
      console.log(error)
      toast('E-mail já cadastrado!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
        type:"warning"
      })
    });

  }

  return (
    
      <Form style={{width:600 +'px'}}>
      

      <Form.Group style={{textAlign:'initial'}} className="mb-3" controlId="formBasicName">
        <Form.Label>Nome</Form.Label>
        <Form.Control onChange={(e)=>{setName(e.target.value)}} required type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group style={{textAlign:'initial'}} className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control onChange={(e)=>{setEmail(e.target.value)}} required type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group style={{textAlign:'initial'}} className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control onChange={(e)=>{setSenha(e.target.value)}} required type="password" placeholder="Password" />
      </Form.Group>
          
      <Button onClick={sendInfo} variant="primary" type="submit">
        Enviar
      </Button>
      <ToastContainer />
    </Form>

  );
}

export default Register;
