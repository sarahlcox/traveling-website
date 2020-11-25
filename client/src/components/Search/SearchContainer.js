import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Where from './Where.js';
// import "./style.css";
class SearchContainer extends Component {
    // Setting the component's initial state
    state = {

    };
    render() {
        return (
            <Jumbotron fluid>
            <Container>
                <Where />
            </Container>
            </Jumbotron>
        )
    }
}

export default SearchContainer;