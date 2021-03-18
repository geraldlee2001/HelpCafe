import React,{useState} from 'react'
import {Button,Form} from "react-bootstrap";
import Header from '../components/Header'
import Field from '../components/Field'
import '../styles/Home.module.css'

const Login = () => {

    const handleSubmit=(event)=>{
        event.preventDefault();
        if (!email){
          alert("Please enter your email")
        }

        else{
          if (!password){
            alert("Please enter your password")
          }
        }

        if (email&&password){
        
        
        }
      }

    return (
      
      <div className="Login">
        <Header/>
        <form onSubmit={handleSubmit}>
        <Field
          name="email"
          type="email"
          autoComplete="email"
          required
          label="Email"
        />
        <Field
          name="password"
          type="password"
          autoComplete="password"
          required
          label="Password"
        />
          <Button size="lg" style={{ margin: "15px 50px", align: "center:" }}  variant="dark" type="submit">
            Login
        </Button>
          <Button size="lg" style={{ margin: "15px 50px", align: "center:" }}  variant="dark" href='/signup' >
            Register
        </Button>
        </form>
        <br />
      
    </div>
  );
}

export default Login
