import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function ResetPage() {

  return (

      <Form style={{width:100 +'%', height:100 + '%', justifyContent:'center',display:'flex',flexDirection:'column',alignItems:'center',}}>
      <Form.Group style={{textAlign:'initial'}} className="mb-3" controlId="formBasicEmail">
      <label style={{marginTop:50 + '%'}} for="basic-url">Digite o código recebido por e-mail</label>
      <div style={{width:100 +'%', }} class="input-group mb-3">
        <div  class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Código</span>
        </div>
        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
      </div>
      
      </Form.Group>
      
      
      <Button variant="primary" type="submit">
        Confirmar
      </Button>
    </Form>

  );
}

export default ResetPage;
