import React, { Component } from 'react'
import LightNav from '../lightNav'
import "./style.css";
import About from './About'
import Dev from './deverlopers'

export default class index extends Component {
    render() {
        return (
            <div className="bg">
               <LightNav/>
               <About/>
               <Dev/>
            </div>
        )
    }
}
