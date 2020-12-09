import React from "react";
import { Card, Accordion } from "react-bootstrap";

function SavedSearch(props) {
    const searchObj = props.search;

    

    return (
        <Card>
            <Card.Body>
                <Card.Title>Saved Search Details</Card.Title>
                {(!props.search) ? (
                    <Card.Text>
                        Choose a saved entry to see the details
                    </Card.Text>
                ) :
                (
                    <Accordion defaultActiveKey="">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Flights
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                Flights Info
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            COVID-19
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                COVID-19 Info
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Hotels
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                Hotels Info
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            Attractions
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                Attractions Info
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                )}
            </Card.Body>
        </Card>
    )
}

export default SavedSearch;