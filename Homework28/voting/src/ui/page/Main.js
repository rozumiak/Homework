import React from "react";
import Container from "../container/Container";
import Header from "../components/Header";
import Voting from "../components/Voiting";

class Main extends React.Component {
    render() {
        return (
            <Container>
                <Header/>
                <Voting/>
            </Container>
        );
    }
}

export default Main;
