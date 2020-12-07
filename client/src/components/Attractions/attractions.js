import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';


function Attractions(props) {
return ( 
                <Card className="single-card" >
                    <Card.Body>
                    <Card.Title className="card-title">Things To Do</Card.Title>
                    <Table striped bordered responsive>
                        <thead>
                            <tr>
                                <th>Name of Attraction:</th>
                                <th>Description:</th>
                            </tr>
                        </thead>
                        <tbody>
                        {props.attractionInfo.map((attraction,index) => {
                            
                            return (
                                <tr key={index} >
                                    <td>{attraction.name}</td>
                                    <td>{attraction.kinds.split(",")[0]}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                    </Card.Body>
                </Card>
        )
    }

export default Attractions;
