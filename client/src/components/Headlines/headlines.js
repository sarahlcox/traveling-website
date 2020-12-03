import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import API from '../../utils/API.js';
// import "./style.css";
function Headlines(props) {
    console.log("getting news info", props.newsInfo);
    return (
            <Card className="single-card">
                <Card.Body>
                <Card.Title>Covid-19 Information</Card.Title>
                <Card.Text>
                    <Table striped bordered responsive>
                        {/* <h1>{props.newsInfo.getInfo.state}</h1> */}
                        <thead>
                            <tr>
                                <th>Positive Cases:</th>
                                <th>Negative Cases:</th>
                                <th>Hospitalized:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props.newsInfo.getInfo.positive}</td>
                                <td>{props.newsInfo.getInfo.negative}</td>
                                <td>{props.newsInfo.getInfo.hospitalized}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
    )
}

export default Headlines;