import React, { Component } from 'react'
import Dev1 from './dev1'
import Dev2 from './dev2'
import Dev3 from './dev3'
import * as ReactBootStrap from "react-bootstrap";

export default class deverlopers extends Component {
    render() {
        return (
            <div>
                <div>
                <p className="head">Web Developers</p>
                 </div>
                 <ReactBootStrap.Container className="container">
                    <ReactBootStrap.Row>
                        <ReactBootStrap.Col xs={6} md={4}>
                        <Dev1/>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col xs={6} md={4}>
                        <Dev2/>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col xs={6} md={4}>
                        <Dev3/>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                    </ReactBootStrap.Container>
                
            </div>
        )
    }
}
