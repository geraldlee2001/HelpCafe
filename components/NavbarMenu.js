import React from 'react'
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>


const NavbarMenu = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link >Food</Nav.Link>   
            <Nav.Link >Drink</Nav.Link>
            <Nav.Link >Combo</Nav.Link>
          </Nav>
          <Button variant="light">Cart</Button>
        </Navbar>
      </>
    )
} 

export default NavbarMenu

