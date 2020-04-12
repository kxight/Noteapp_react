import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap";
import logo from "./logo.svg" ;

export default class index extends Component {
    render() {
        return (
            <div>
                 <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="" variant="light">
    <ReactBootStrap.Navbar.Brand href="/home">
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Home
      </ReactBootStrap.Navbar.Brand>

  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-ReactBootStrap.Navbar-ReactBootStrap.Nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-ReactBootStrap.Navbar-ReactBootStrap.Nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#features">Menu</ReactBootStrap.Nav.Link>
      
      
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
        Dank memes
      </ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown title="Profile" id="collasible-ReactBootStrap.Nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">My Profile</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Logout</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.Nav.Link href="/about">About</ReactBootStrap.Nav.Link>
      
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
            </div>
        )
    }
}

