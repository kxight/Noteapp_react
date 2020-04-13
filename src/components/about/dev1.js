import React, { Component } from 'react'
import "./style.css";
import * as ReactBootStrap from "react-bootstrap";
import img from "./nice.jpg" ;


export default class dev1 extends Component {
    render() {
        return (
            <div>
                <ReactBootStrap.Card style={{ width: '18rem' }} >
                <a href="https://www.facebook.com/nutkamon.nice"  >
                <ReactBootStrap.Image src={img} roundedCircle className="imgdev" />
                </a>
                <ReactBootStrap.Card.Body>
                <ReactBootStrap.Card.Title className="dev">Natkamon Ninphonnan</ReactBootStrap.Card.Title>
                <ReactBootStrap.Card.Text className="dev">
                610610581
                </ReactBootStrap.Card.Text>
                </ReactBootStrap.Card.Body>
  
                </ReactBootStrap.Card>

            </div>
        )
    }
}
