import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function ResetPage({email}) {
  console.log(email)

  const [ value1, setValue1 ] = useState('');
  const [ value2, setValue2 ] = useState('');
  const [ value3, setValue3 ] = useState('');
  const [ value4, setValue4 ] = useState('');

  return (

      <Form style={{width:100 +'%', height:100 + '%', justifyContent:'center',display:'flex',flexDirection:'column',alignItems:'center',}}>
      <Form.Group style={{textAlign:'center',justifyContent:'center',display:'flex',flexDirection:'column',alignItems:'center',}} className="mb-3" controlId="formBasicEmail">
      <label style={{marginTop:20 + '%'}} for="basic-url">Digite o código recebido por e-mail</label>
      <div style={{width:30 +'%'}} class="input-group mb-9">
        <div  class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Código</span>
        </div>
        <input onChange={(e) =>{setValue1(e.target.value)}} style={{textAlign:'center' }} maxLength={1} type="text" class="form-control" aria-describedby="basic-addon1"/>
        <input onChange={(e) =>{setValue2(e.target.value)}} style={{textAlign:'center' }} maxLength={1} type="text" class="form-control" aria-describedby="basic-addon3"/>
        <input onChange={(e) =>{setValue3(e.target.value)}} style={{textAlign:'center' }} maxLength={1} type="text" class="form-control" aria-describedby="basic-addon3"/>
        <input onChange={(e) =>{setValue4(e.target.value)}} style={{textAlign:'center' }} maxLength={1} type="text" class="form-control" aria-describedby="basic-addon3"/>
      </div>
      
      </Form.Group>
      
      
      <Button variant="primary" type="submit">
        Confirmar
      </Button>
    </Form>

  );
}

export default ResetPage;
