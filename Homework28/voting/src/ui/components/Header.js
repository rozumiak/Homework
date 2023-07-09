import React from "react";
import logo from "./../../img/earth.png";
import "../../style/style-header/header.css"

class Header extends React.Component {
    render() {
        return (
            <header>
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Hello user</p>
            </header>
        );
    }

}

export default Header;
