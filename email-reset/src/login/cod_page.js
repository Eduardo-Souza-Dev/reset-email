import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from "react-router-dom";

function ResetPage() {
  let value = useLocation();
  let id_user_register = value.state.id_user_register;

  const [ value1, setValue1 ] = useState('');
  const [ value2, setValue2 ] = useState('');
  const [ value3, setValue3 ] = useState('');
  const [ value4, setValue4 ] = useState('');

  let data = {
    id_user:id_user_register,
    cod:`${value1}${value2}${value3}${value4}`
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
      console.log(data)
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
    </Form>

  );
}

export default ResetPage;
