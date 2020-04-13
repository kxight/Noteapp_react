import React from "react";
//import regisImg from "../../regis.svg" ;

export class Register extends React.Component {

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
                "Register"
            ),
            React.createElement(
                "div",
                { className: "content" },
                React.createElement("div", { className: "image" }),
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
                            { htmlFor: "email" },
                            "Email"
                        ),
                        React.createElement("input", { type: "email", name: "email", placeholder: "email" })
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
                    ),
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                            "label",
                            { htmlFor: "password" },
                            "Confirm Password"
                        ),
                        React.createElement("input", { type: "password", name: "Confirm password", placeholder: "confirm password" })
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "footer" },
                React.createElement(
                    "button",
                    { type: "button", className: "btnl" },
                    "Register"
                )
            )
        );
    }
}

