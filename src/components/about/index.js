import React, { Component } from 'react'
import Navbar from '../Navbar'
import "./style.css";
import About from './About'
import Dev from './deverlopers'

export default class index extends Component {
    render() {
        return (
            <div>
               <Navbar/>
               <About/>
               <Dev/>
            </div>
        )
    }
}
