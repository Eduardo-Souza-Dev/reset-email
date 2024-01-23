import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//pages
import Home from './home';
import Login from './login';
import Register from './register';
import ResetPage from './login/cod_page';
import EmailPage from './login/email_page';



function App() {
  let [values, setValues] = useState('')

  useEffect(() => {
    fetch('http://localhost:3333/api/dados')
      .then(response => response.json())
      .then(data => {
        setValues(data);
      })
      .catch(error => console.error('Erro na requisição:', error));
    }, []);



  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />}/>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cod-page" element={<ResetPage />} />
          <Route path="email-reset-password" element={<EmailPage />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
