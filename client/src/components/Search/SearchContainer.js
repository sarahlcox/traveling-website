import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import FormControl from './FormControl.js';
// import "./style.css";
class SearchContainer extends Component {
    // Setting the component's initial state
    state = {

    };
    render() {
        return (
            <Jumbotron fluid>
            <Container>
                <FormControl />
            </Container>
            </Jumbotron>
        )
    }
}

export default SearchContainer;