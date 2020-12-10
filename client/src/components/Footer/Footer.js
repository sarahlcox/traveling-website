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

// function Footer() {
//     return (
//         <div className="mt-5 pt-5 pb-5 footer fixed-bottom">
//         <div className="container">
//         <div className="row">
//             <div className="col-lg-5 col-xs-12 about-company">
//             <h2>Travel Pocket Wizard</h2>
//             <p className="pr-5 text-white-50">Your convenient travel companion application.</p>
//             </div>
//             <div className="col-lg-3 col-xs-12">
//             </div>
//             <div class="col-lg-4 col-xs-12 location">
//             <h4 class="mt-lg-0 mt-sm-4">Production Team</h4>
//             <div class="m-0 p-0" id= "fl">
//                 <p class = "fl">- <a href="https://github.com/aaray12" target="_blank">Aaron Ray</a></p>
//                 <p class = "fl">- <a href="https://github.com/achueng" target="_blank">Agnes Chueng</a></p>
//                 <p class = "fl">- <a href="https://github.com/ElizabethReuter" target="_blank">Elizabeth Reuter</a></p>
//                 <p class = "fl">- <a href="https://github.com/jcuush" target="_blank">Jack Cushing</a></p>
//                 <p class = "fl"> - <a href="https://github.com/sarahlcox" target="_blank">Sarah Cox</a></p>
//                 </div>
//             </div>
//         </div>
//         <div class="row mt-5">
//             <div class="col copyright">
//             <p class=""><small class="text-white-50">© 2020. All Rights Reserved.</small></p>
//             <p>Aaron Ray, Agnes Chueng, Elizabeth Reuter, Jack Cushing, Sarah Cox</p> 
//             </div>
//         </div>
//         </div>
//         </div>
//     );
//   }

export default Footer;
