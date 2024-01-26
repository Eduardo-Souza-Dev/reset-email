import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import ResetPage from './cod_page';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EmailPage(){
    const [ email, setEmail ] = useState('');


    async function VerifyEmail(e) {
      e.preventDefault();
      fetch(`http://localhost:3333/verify/${email}`, {
          method: "POST",
          body: JSON.stringify(email),
          headers: { "Content-type": "application/json; charset=UTF-8" },
          mode: "no-cors",
      })
      .then(response => response.json())
      .then(data => {
          console.log(data);
          toast('Código enviado ao seu e-mail!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
              theme: "dark",
              type: "success"
          });
          // window.location = <ResetPage/>
      })
      .catch((error) => { 
          toast('Erro ao enviar código', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
              theme: "dark",
              type: "warning"
          });
          console.log(error);
      });
  }

    return (

        <Form style={{width:100 +'%', height:100 + '%', justifyContent:'center',display:'flex',flexDirection:'column',alignItems:'center',}}>
        <Form.Group style={{textAlign:'initial'}} className="mb-3" controlId="formBasicEmail">
       <strong> <label style={{marginTop:50 + '%'}} for="basic-url">Digite o email para recebimento do código:</label></strong>
        <div style={{width:500 +'px', }} class="input-group mb-3">
          <div  class="input-group-prepend">
            <span class="input-group-text" id="basic-addon3">Email</span>
          </div>
          <input onChange={(e) =>{setEmail(e.target.value)}} type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
        </div>
        
        </Form.Group>
        
        
        <Button onClick={VerifyEmail} variant="primary" type="submit">
          Confirmar
        </Button>
      </Form>
  
    );

}

export default EmailPage