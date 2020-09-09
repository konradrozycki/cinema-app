import React, { Component } from "react";
import "./Prices.css";

// console.log("its working!!");

class Prices extends Component {
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
                <h1 className="headline">Prices</h1>
                <div className="pricesList">
                    <ul>
                        <li>normal ticket &nbsp;&nbsp;&nbsp;9€</li>
                        <li>reduced ticket &nbsp;&nbsp;7€</li>
                        <li>cheap thursday &nbsp;5€</li>
                        <li>group tickets &nbsp;&nbsp;&nbsp;5€</li>
                    </ul>
                    <div className="ticketsInfo">
                        <h3>Reduced ticket</h3>
                        <p>
                            it is entitled to children, pupils, <br />
                            students up to 26 years of age, <br />
                            well as pensioners
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Prices;
