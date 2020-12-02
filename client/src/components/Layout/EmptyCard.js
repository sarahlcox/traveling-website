import React from "react";
import Card from "react-bootstrap/Card";

function EmptyCard(props) {
    return (
        <Card className="single-card" >
            <Card.Body>
                <Card.Title>{props.info} Information Not Available</Card.Title>
                <Card.Text>
                Please enter in your travel information to search for {props.info.toLowerCase()} details.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    )
}

export default EmptyCard;