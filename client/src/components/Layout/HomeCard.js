import React from 'react';
import Card from 'react-bootstrap/Card'

function HomeCard (props) {

return (
        <Card className="single-card" >
            <Card.Body>
                <Card.Title className="card-heading">Please enter in your travel information to search for {props.info.toLowerCase()} details.</Card.Title>
            </Card.Body>
        </Card>
)
    
}

export default HomeCard;