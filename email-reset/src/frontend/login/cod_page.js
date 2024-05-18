import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation,useNavigate } from "react-router-dom";

function ResetPage() {
  let navigate = useNavigate();
  let value = useLocation();
  let id_user_register = value.state.id_user_register;

  const [ value1, setValue1 ] = useState('');
  const [ value2, setValue2 ] = useState('');
  const [ value3, setValue3 ] = useState('');
  const [ value4, setValue4 ] = useState('');

  let data = {
    id:id_user_register,
    cod_reset:`${value1}${value2}${value3}${value4}`
  }
   function sendInfo(e){
    e.preventDefault()
    fetch(`http://localhost:3333/cod-reset`,{
      method:"POST",
      headers:{ "Content-type": "application/json; charset=UTF-8" },
      body:JSON.stringify(data),
      mode:'cors',
    })
    .then(response => response.json())
    .then(data =>{
      if(data.message === "Código válido"){
        toast('Código confirmado!', {
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

        setTimeout(() =>{
          navigate('/new-password-page',{state: { id_user_register: data.values } })
          },2000)
      }

      if(data.message === "Código inválido"){
        toast('Código inválido!', {
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

      if(data.message === "Email not found!"){
        toast('Email não cadastrado na base de dados!', {
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

      if(data.message === "Código vazio"){
        toast('Código vazio', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
          type: "warning"
        })
      }
    })
    .catch(err =>{
      console.log(err)
    })

  }

  return (

      <Form style={{width:100 +'%', height:100 + '%', justifyContent:'center',display:'flex',flexDirection:'column',alignItems:'center',}}>
      <Form.Group style={{textAlign:'center',justifyContent:'center',display:'flex',flexDirection:'column',alignItems:'center',}} className="mb-3" controlId="formBasicEmail">
      <label style={{marginTop:20 + '%'}} for="basic-url">Digite o código recebido por e-mail</label>
      <div style={{width:30 +'%'}} class="input-group mb-9">
        <div  class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Código</span>
        </div>
        <input required onChange={(e) =>{setValue1(e.target.value)}} style={{textAlign:'center' }} maxLength={1} type="text" class="form-control" aria-describedby="basic-addon3"/>
        <input required onChange={(e) =>{setValue2(e.target.value)}} style={{textAlign:'center' }} maxLength={1} type="text" class="form-control" aria-describedby="basic-addon3"/>
        <input required onChange={(e) =>{setValue3(e.target.value)}} style={{textAlign:'center' }} maxLength={1} type="text" class="form-control" aria-describedby="basic-addon3"/>
        <input required onChange={(e) =>{setValue4(e.target.value)}} style={{textAlign:'center' }} maxLength={1} type="text" class="form-control" aria-describedby="basic-addon3"/>
      </div>
      
      </Form.Group>
      
      
      <Button onClick={sendInfo} variant="primary" type="submit">
        Confirmar
      </Button>
      <ToastContainer />
    </Form>

  );
}

export default ResetPage;
