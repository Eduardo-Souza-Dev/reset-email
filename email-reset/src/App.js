import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//pages
import Home from './home'
import Login from './frontend/login';
import Register from './frontend/register';
import ResetPage from './frontend/login/cod_page';
import EmailPage from './frontend/login/email_page';
import NewPasswordPage from './frontend/login/new_password_page';
import SucessPage from './frontend/login/success_login';


function App() {

  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />}/>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cod-page" element={<ResetPage />} />
          <Route path="email-reset-password" element={<EmailPage />} />
          <Route path="new-password-page" element={<NewPasswordPage />} />
          <Route path="success-login" element={<SucessPage />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
