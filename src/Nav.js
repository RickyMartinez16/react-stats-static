import React from "react";
import logo from "./react-logo.png"
import "./nav.css"

function Nav(){
    return (
        <nav>
            <img src={logo} width="40px" alt="react-logo" className="main-logo"/>
            <h2 className="logo-text">ReactFacts</h2>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}

export default Nav