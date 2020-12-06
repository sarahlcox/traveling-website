import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
// import "./style.css";

function Attractions(props) {
    // const makeUpperCase = (str) => {
    //     for (var i = 0; i < words.length; i++) {
    //         var word = words[i];
    //         var letters = word.split("");
        
    //         if (i > 0) {
    //           letters[0] = letters[0].toUpperCase();
    //         }
    //         }
    //     }
        return ( 
                <Card className="single-card" >
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <Card.Body>
                    <Card.Title>Things To Do</Card.Title>
                    <Table striped bordered responsive>
                        {/* <h1>{props.newsInfo.getInfo.state}</h1> */}
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
                                    <td>{makeUpperCase(attraction.name)}</td>
                                    <td>{makeUpperCase(attraction.kinds.split(",")[0])}</td>
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
