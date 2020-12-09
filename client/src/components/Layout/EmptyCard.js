import React from "react";
import Card from "react-bootstrap/Card";

function EmptyCard(props) {
    return (
        <Card className="single-card" >
            <Card.Body>
                <Card.Title className="card-heading">{props.info} Information Not Available</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default EmptyCard;