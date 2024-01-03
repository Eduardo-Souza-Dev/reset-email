import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function Home() {

  return (
    <div className="App">
 
      <header className="App-header">
        <img style = {{height: 100 + 'px'}} src={logo} className="App-logo" alt="logo" />
        <p>
         Reset de e-mail
        </p>
        <section style={{display:'flex', justifyContent:'space-between', width:300 + 'px', height: 50 + 'px'}}>
    
            <Link to={"register"}>
                <Button variant="primary" type="submit">
                        Cadastrar
                </Button>
            </Link>
            

            <Link to={"login"}>
                <Button variant="success" type="submit">
                        Logar
                </Button>
            </Link>
        </section>

      </header>
 

    </div>
  );
}

export default Home;
