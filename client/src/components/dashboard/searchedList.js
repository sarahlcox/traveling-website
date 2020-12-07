import React from "react";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';



function formatDate(date) {
    function formatedDate(date) {
        let splitDate = date.split("-")
        splitDate.reverse()
        let formatedDate = splitDate.join("/");
        return formatedDate
    }
    const formatingDate = date.split("T");
    return formatedDate(formatingDate[0])
}


function SearchesList(props){

    const myList = props.list;

    function mapList(list){
        let newList = list.map(e => {
            return(
                <tr>
                <td>{e.city1}</td>
                <td>{e.city2}</td>
                <td>{formatDate(e.outboundDate)}</td>
                </tr>
            )
        })
        return newList
    }

    return(
        <Card className="single-card">
        <Card.Body>
        <Card.Title>Saved Searches</Card.Title>
        <Card.Text>
            <Table striped bordered responsive>
                {/* <h1>{props.newsInfo.getInfo.state}</h1> */}
                <thead>
                    <tr>
                        <th>Origin:</th>
                        <th>Destination:</th>
                        <th>Date:</th>
                    </tr>
                </thead>
                <tbody>
                  {mapList(myList)}
                </tbody>
            </Table>
        </Card.Text>
        </Card.Body>
    </Card>
    )
}
export default SearchesList;