import React from "react";
import loginImg from "../../login2.svg" ;
import {Router,Route,Link,browserHistory} from 'react-router';

export class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            "div",
            { className: "base-container", ref: this.props.containerRef },
            React.createElement(
                "div",
                { className: "header" },
                "Login"
            ),
            React.createElement(
                "div",
                { className: "content" },
                React.createElement(
                    "div",
                    { className: "image" },
                    React.createElement("img", { src: loginImg })
                ),
                React.createElement(
                    "div",
                    { className: "form" },
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "label",
                            { htmlFor: "username" },
                            "Username"
                        ),
                        React.createElement("input", { type: "text", name: "username", placeholder: "username" })
                    ),
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "label",
                            { htmlFor: "password" },
                            "Password"
                        ),
                        React.createElement("input", { type: "password", name: "password", placeholder: "password" })
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "footer" },
                React.createElement(
                    "button",
                    { type: "button", className: "btnl" },
                    "Login"
                )
            )
        );
    }
}


