import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from "react-router-dom";

function NewPasswordPage() {
  let value = useLocation();
  let id_user_register = value.state.id_user_register;

  const [password, setPassword] = useState('');
  const [new_password, setNewPassword] = useState('');

  if(password !== new_password || password === ''){
   document.getElementById('btn_send').disabled = true;
  }else{
    document.getElementById('btn_send').disabled = false;
  }
  

//   let data = {
//     id:id_user_register,
//     password:`${value1}${value2}${value3}${value4}`
//   }

   function sendInfo(e){
    e.preventDefault()
    fetch(`http://localhost:3333/cod-reset`,{
      method:"POST",
      headers:{ "Content-type": "application/json; charset=UTF-8" },
    //   body:JSON.stringify(data),
      mode:'cors',
    })
    .then(response => response.json())
    .then(data =>{
      console.log(data)

      if(data.message === "Nova senha inserida"){
        toast('Nova senha inserida!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
          type: "success"
        })
      }

      if(data.message === "Erro na senha"){
        toast('Erro na senha!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
          type: "error"
        })
      }
    })
    .catch(err =>{
      console.log(err)
    })

  }

  return (

      <Form style={{width:100 +'%', height:100 + '%', justifyContent:'center',display:'flex',flexDirection:'column',alignItems:'center',}}>
      <Form.Group style={{width:500 + 'px',textAlign:'left',justifyContent:'center',display:'flex',flexDirection:'column',alignItems:'center',}} className="mb-3" controlId="formBasicEmail">
      <label style={{marginTop:20 + '%'}} for="basic-url">Digite a nova senha para o seu login...</label>
      <div style={{width:100 +'%'}} class="input-group mb-9">
     
      <div  class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Nova senha:</span>
      </div>
      <input onChange={(e) => {setPassword(e.target.value)}} style={{textAlign:'left' }} type="password" class="form-control" aria-describedby="basic-addon3"/>   

      </div>

      {
      new_password !== password && (
        <span style={{color:'red'}}>As senhas não conferem!</span>
      )
     }

     {
      new_password === password && password !== '' && (
        <span style={{color:'green'}}>As senhas conferem!</span>
      )
     }

     {
      password === ''&& (
        <span style={{color:'red'}}>Senha vazia!</span>
      )
     }
   
     <div style={{width:100 +'%',marginTop: 50 + 'px'}} class="input-group mb-9">
   
     <div  class="input-group-prepend">
         <span class="input-group-text" id="basic-addon3">Confirmar senha:</span>
     </div>
     <input onChange={(e) => {setNewPassword(e.target.value)}} style={{textAlign:'left' }} type="password" class="form-control" aria-describedby="basic-addon3"/>   

     </div>
      
      </Form.Group>
      
      
      <Button id='btn_send' onClick={sendInfo} variant="primary" type="submit">
        Confirmar
      </Button>
      <ToastContainer />
    </Form>

  );
}

export default NewPasswordPage;
