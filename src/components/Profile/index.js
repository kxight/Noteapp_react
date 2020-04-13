import React, { Component } from 'react'
import Navbar from '../Navbar'
import "./style.css"
import * as ReactBootStrap from "react-bootstrap";
import img from "./profilepic.png" ;

export default class index extends Component {
    render() {
        return (
            <div className="profilebg">
                <Navbar/>

                <ReactBootStrap.Card style={{ width: '50rem' }} className="box" >
                
                <ReactBootStrap.Card.Body>
                    <ReactBootStrap.Card.Title className="name">Name LastName</ReactBootStrap.Card.Title>
                    <ReactBootStrap.Image variant="top" src={img} roundedCircle  className ="profilepic"/>
                    <ReactBootStrap.Card.Text className="inform">
                    Status
                    </ReactBootStrap.Card.Text>
                </ReactBootStrap.Card.Body>
                <ReactBootStrap.ListGroup className="ReactBootStrap.List-group-flush">
                    <ReactBootStrap.ListGroupItem className="inform">iformation</ReactBootStrap.ListGroupItem>
                </ReactBootStrap.ListGroup>

                </ReactBootStrap.Card>
                
            </div>
        )
    }
}
