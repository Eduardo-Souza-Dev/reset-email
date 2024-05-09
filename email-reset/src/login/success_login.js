import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SucessPage() { 
  return (
    
      <Form style={{width:'100%', justifyContent:'center',backgroundColor:'#6FCF40', textAlign:'center', 
      height: '100%', border:'1px solid green',marginTop:'20%'}}>

        <h1>Usuário Logado com sucesso!!</h1>
      <ToastContainer />
    </Form>

  );
}

export default SucessPage;
