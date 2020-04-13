import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap";
import logo from "../Navbar/logo2.png" ;

export default class index extends Component {
    render() {
        return (
            <div>
                 <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="" variant="dark">
    <ReactBootStrap.Navbar.Brand href="/home">
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Note App
      </ReactBootStrap.Navbar.Brand>

  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-ReactBootStrap.Navbar-ReactBootStrap.Nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-ReactBootStrap.Navbar-ReactBootStrap.Nav">
    <ReactBootStrap.Nav className="mr-auto">
      
      
      
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    
      
      <ReactBootStrap.NavDropdown title="Profile" id="collasible-ReactBootStrap.Nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="/profile">My Profile</ReactBootStrap.NavDropdown.Item>
        
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="/">Logout</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.Nav.Link href="/about">About</ReactBootStrap.Nav.Link>
      
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
            </div>
        )
    }
}