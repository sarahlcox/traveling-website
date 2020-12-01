import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import FormControl from './FormControl.js';
// import "./style.css";
function SearchContainer(props) {
   
        return (
            <Jumbotron fluid>
            <Container>
                <FormControl 
                handleInputChange = {props.handleInputChange}
                handleFormSubmit = {props.handleFormSubmit}
                />
            </Container>
            </Jumbotron>
        )
    
}

export default SearchContainer;