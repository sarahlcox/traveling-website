import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Search.css';

function FormControl(props){
        return (
            <Form>
            <Row>
                <Col>
                <Form.Control
                 placeholder="Origin City" 
                 onChange={props.handleInputChange}
                 name="city1"
                />
                </Col>
                <Col>
                <Form.Control
                 placeholder="Destination City" 
                 onChange={props.handleInputChange}
                 name="city2"
                />
                </Col>
                <Col>
                <Form.Control
                 placeholder="Destination State Code" 
                 onChange={props.handleInputChange}
                 name="stateCode"
                />
                </Col>
                <Col>
                <Row>
                <Form.Control
                 placeholder="Departure Date" 
                 onChange={props.handleInputChange}
                 name="outboundDate"
                />
                </Row>
                <Row>
                    <p>dd/mm/yyyy</p>
                </Row>
                </Col>
                <Col>
                <Button 
                variant="primary"
                 type="submit"
                 onClick = {props.handleFormSubmit}
                 >
                    Search
                </Button>
                </Col>
            </Row>
            </Form>
        )
    
}

export default FormControl;