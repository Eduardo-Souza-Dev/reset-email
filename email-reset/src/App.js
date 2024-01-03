import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './home';
import Login from './login';
import Register from './register';



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
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
