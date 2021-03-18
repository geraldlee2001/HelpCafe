import React,{useState} from 'react'
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = ({status}) => {
    
    
    return (
        <div >
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">HelpCafe</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">     
            {status && <Button href="/login" variant='dark'>Login/Register</Button>}
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header