import React from "react";
import Row from 'react-bootstrap/Row';
import './Footer.css';
import TPWLogo from '../../Assets/TPWLogo.png';

var style = {
    backgroundColor: "black",
    color: "white",
    borderTop: "1px solid #6610f2",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
}

function Footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                <div id = "lf">
                    <img id = "logo" src={TPWLogo} height= "7px" width = "7px"></img>
                    <p id = "ccf">© 2020 All Rights Reserved.</p>
                </div>
                <div id = "fl">
                <p class="fl">Production Team:</p>
                <p class="fl"> &nbsp;<a href="https://github.com/aaray12" target="_blank">Aaron Ray</a></p>
                <p class="fl">, &nbsp;<a href="https://github.com/achueng" target="_blank">Agnes Chueng</a></p>
                <p class="fl">, &nbsp;<a href="https://github.com/ElizabethReuter" target="_blank">Elizabeth Reuter</a></p>
                <p class="fl">, &nbsp;<a href="https://github.com/jcuush" target="_blank">Jack Cushing</a></p>
                <p class="fl">,  &nbsp;<a href="https://github.com/sarahlcox" target="_blank">Sarah Cox</a></p>
                </div>
            </div>
        </div>
    )
}


export default Footer;
