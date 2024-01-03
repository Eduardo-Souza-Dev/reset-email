import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
//   let [values, setValues] = useState('')

//   useEffect(() => {
//     fetch('http://localhost:3333/api/dados')
//       .then(response => response.json())
//       .then(data => {
//         setValues(data);
//       })
//       .catch(error => console.error('Erro na requisição:', error));
//     }, []);


  return (

      <Form style={{width:600 +'px'}}>
      <Form.Group style={{textAlign:'initial'}} className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
    
      </Form.Group>

      <Form.Group style={{textAlign:'initial'}} className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group style={{display:'flex', justifyContent: 'space-between'}} className="mb-3" controlId="formBasicCheckbox" >

        <Form.Group style={{color:'white', fontSize:20 + 'px', textAlign:'end'}} className="mb-3" controlId="formBasicCheckbox">
          <Form.Text style={{color:'white', fontSize:20 + 'px'}}>
            Esqueceu a senha? <a href="#"id='link_reset'>Resetar</a>
          </Form.Text>
        </Form.Group>

        <Form.Group style={{color:'white', fontSize:20 + 'px', textAlign:'start'}} className="mb-3" controlId="formBasicCheckbox">
          <Form.Text style={{color:'white', fontSize:20 + 'px'}}>
            Não possui usuário? <a href="#"id='link_reset'>Registrar</a>
          </Form.Text>
        </Form.Group>

      </Form.Group>
      
      
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>

  );
}

export default Login;
