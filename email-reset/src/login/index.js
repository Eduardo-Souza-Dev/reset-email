import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

function Login() {
  //Pega os valores digitados nos inputs
  let [email, setEmail] = useState('');
  let [senha, setSenha] = useState('');

  let data = {
    email: email,
    senha: senha
  }


  //Chamada de uma função assincrona dentro do botão de enviar os dados, que faz a verificação de login do usuário
   function ConfirmLogin(e){
    e.preventDefault(); 
    console.log("Chamada de uma função assincrona dentro do botão de")
    if(email === '' || senha === ''){
      toast('Preencha todos os campos!', {
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
      return;
    }

    

    fetch(`http://localhost:3333/verify/user`, {
      method: 'POST',
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body: JSON.stringify(data),
      mode: "cors"
    })
     .then(response => response.json())
     .then(data =>{
      if(data.message == "Usuário logado com sucesso"){
       toast('Usuário logado com sucesso!', {
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
     }

     if(data.message == "Senha incorreta!"){    
       toast('Erro ao logar!', {
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
     }

     if(data.message == "Usuario não encontrado"){    
      toast('Usuário não encontrado!', {
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
    }
   })
   .catch((error) =>{
     toast('Erro ao cadastrar!', {
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
      <Form.Group style={{textAlign:'initial'}} className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) =>{setEmail(e.target.value)}} />
    
      </Form.Group>

      <Form.Group style={{textAlign:'initial'}} className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) =>{setSenha(e.target.value)}} />
      </Form.Group>
      <Form.Group style={{display:'flex', justifyContent: 'space-between'}} className="mb-3" controlId="formBasicCheckbox" >

        <Form.Group style={{color:'white', fontSize:20 + 'px', textAlign:'end'}} className="mb-3" controlId="formBasicCheckbox">
          <Form.Text style={{color:'white', fontSize:20 + 'px'}}>
            Esqueceu a senha? 
            <Link to={"/email-reset-password"}>
                        Resetar a senha
            </Link>
          </Form.Text>
        </Form.Group>

        <Form.Group style={{color:'white', fontSize:20 + 'px', textAlign:'start'}} className="mb-3" controlId="formBasicCheckbox">
          <Form.Text style={{color:'white', fontSize:20 + 'px'}}>
            Não possui usuário? 
            <Link to={"/register"}>
                        Registrar
            </Link>
          </Form.Text>
        </Form.Group>

      </Form.Group>
      
 
      <Button onClick={(e) =>ConfirmLogin(e)} variant="primary" type="submit" >
        Enviar
      </Button>

    </Form>

  );
}

export default Login;
