import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
// import "./style.css";
class Headlines extends Component {
    // Setting the component's initial state
    state = {

    };
    render() {
        return (
                <Card className="single-card" >
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <Card.Body>
                    <Card.Title>COVID-19 Updates</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
        )
    }
}

export default Headlines;