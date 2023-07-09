import React from "react";
import MainBlock from "../container/Block";
class Navigation extends React.Component {
    render() {
        return (
            <div className="container">
                <nav>
                    <ul>
                        <li><a href="#">Головна</a></li>
                        <li><a href="#">Про нас</a></li>
                        <li><a href="#">Контакти</a></li>
                    </ul>
                </nav>
                <MainBlock/>
            </div>

        );
    }

}

export default Navigation;
