import React from "react";
import { Card, Table }from 'react-bootstrap';

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
    const savedList = props.list;

    function capitalize(string) {
        return string.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, match => match.toUpperCase());
    }

    function mapList(list){
        let newList = list.map(e => {
            return (
                <tr key={list.indexOf(e)}>
                    <td>{capitalize(e.city1)}</td>
                    <td>{capitalize(e.city2)}, {e.stateCode}</td>
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
                {savedList === null ? (
                <Card.Text>
                    No Searches Saved
                </Card.Text>
                ) : (
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Origin:</th>
                            <th>Destination:</th>
                            <th>Date:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mapList(savedList)}
                    </tbody>
                </Table>
                )}
            </Card.Body>
        </Card>
    )
}
export default SearchesList;