import React, { Component } from 'react'
import "./style.css";
import * as ReactBootStrap from "react-bootstrap";
import img from "./may.jpg" ;

export default class dev2 extends Component {
    render() {
        return (
            <div>
                <ReactBootStrap.Card style={{ width: '18rem' }} >
                <a href="https://www.facebook.com/nipapornnpmt">
                <ReactBootStrap.Image src={img} roundedCircle className="imgdev" />
                </a>
                <ReactBootStrap.Card.Body>
                <ReactBootStrap.Card.Title className="dev">Nipaporn Meetubtim</ReactBootStrap.Card.Title>
                <ReactBootStrap.Card.Text className="dev">
                610610595
                </ReactBootStrap.Card.Text>
                </ReactBootStrap.Card.Body>
  
                </ReactBootStrap.Card>

            </div>
        )
    }
}