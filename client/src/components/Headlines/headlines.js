import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import API from '../../utils/API.js';
// import "./style.css";
class Headlines extends Component {
    // Setting the component's initial state
    state = {

    };

    loadState= () =>  {
        console.log("?");
        API.getState()
          .then(res => 
            console.log("front end results", res.data)
          )
          .catch(err => console.log(err));
      };
    // componentDidMount=()=> {
    //     this.loadState()
    // };
    render() {
        return (
                <Card className="single-card" >
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <Card.Body>
                    <Card.Title>COVID-19 Updates</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                        <button onClick={this.loadState}>Click</button>
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