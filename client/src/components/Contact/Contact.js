import React, { Component } from "react";
import "./Contact.css";

console.log("its working");

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="listOfContents">
                    <a className="fromLeft" href="/">
                        Movies
                    </a>
                    <a className="fromCenter" href="/coming-soon">
                        Comming soon
                    </a>
                    <a className="fromCenter" href="/prices">
                        Prices
                    </a>
                    <a className="fromRight" href="contact">
                        Contact
                    </a>
                </div>
                <div className="contactInfo">
                    <br />
                    <br />
                    <h1>Contact</h1>
                    <br />
                    <br />
                    <h2>Mailing Address</h2>
                    <br />
                    <p>New Firmament Cinema</p>
                    <p>Grenville Street</p>
                    <p>Brighton BN1 2RU</p>
                    <p>United Kingdom</p>
                    <p>phone +44 1236 010230</p>
                    <p>fax +44 1236 010230-00</p>
                </div>
                <div className="contactLinks">
                    <img
                        src="https://i.ibb.co/tqXS6xw/mail-1.png"
                        className="emailIcon"
                        alt="email"
                    ></img>
                    <a href="mailto: info@nfcinema.com">info@nfcinema.com</a>
                    <br />
                    <br />
                    <img
                        src="https://i.ibb.co/PCVK1GW/location.png"
                        className="locationIcon"
                        alt="location"
                    ></img>
                    <a href="https://goo.gl/maps/2A2N9mwt37zGDpk66">
                        Show address on map
                    </a>
                </div>
            </div>
        );
    }
}

export default Contact;
