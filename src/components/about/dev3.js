import React, { Component } from 'react'
import "./style.css";
import * as ReactBootStrap from "react-bootstrap";
import img from "./Airn.jpg" ;

export default class developer extends Component {
    render() {
        return (
            <div>
                <ReactBootStrap.Card style={{ width: '18rem' }} >
                <a href="https://www.facebook.com/aucthara.deeunkong">
                <ReactBootStrap.Image src={img} roundedCircle className="imgdev" />
                </a>
                <ReactBootStrap.Card.Body>
                <ReactBootStrap.Card.Title className="dev">Aujchara Dee-unkong</ReactBootStrap.Card.Title>
                <ReactBootStrap.Card.Text className="dev">
                610610624
                </ReactBootStrap.Card.Text>
                </ReactBootStrap.Card.Body>
  
                </ReactBootStrap.Card>

            </div>
        )
    }
}