import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import "./style.css";
class FormControl extends Component {
    // Setting the component's initial state
    state = {

    };
    render() {
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
}

export default FormControl;