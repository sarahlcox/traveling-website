import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

function Greeting(props) {
    return (
        <Jumbotron className="greeting mx-auto">
            <h1 className="mb-4"><b>Hey there,</b> {props.username}</h1>
            <h3 className="mb-2">
                You are logged into {" "}
                <span>Travel Pocket Wizard</span>
            </h3>
            <Button
                onClick={props.logout}
                size="lg"
                className="logout-btn my-2"
            >
                Logout
                </Button>
        </Jumbotron>
    )
}

export default Greeting;