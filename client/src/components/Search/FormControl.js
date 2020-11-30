import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import API from "../../utils/API"
// import "./style.css";

function FormControl(){
    
    React.useEffect(()=>{
        //make state and pass the state instead of city names & date
        API.getFlight({
            city1: "Chicago",
            city2: "New York",
            outboundDate: "test"
        }).then(res =>{
            console.log("FE res", res)
        })
    },[])
        return (
            <Form>
            <Row>
                <Col>
                <Form.Control placeholder="First name" />
                </Col>
                <Col>
                <Form.Control placeholder="Last name" />
                </Col>
                <Col>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Col>
            </Row>
            </Form>
        )
    
}

export default FormControl;