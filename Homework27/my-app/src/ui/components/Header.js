import React from "react";
import logo from "./../../img/earth.png";

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
