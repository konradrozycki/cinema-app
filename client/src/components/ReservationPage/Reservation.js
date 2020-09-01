import React, { Component } from "react";
import "./Reservation.css";
import { Link } from "react-router-dom";

class Reservation extends Component {
    render() {
        return (
            <div className="reservation-info">
                <div className="reservation-msg">
                    <h1>
                        Thank you for choosing our cinema. Have a a nice time!
                    </h1>
                    {/* <p>Your seans data: date: {this.props.date}, hour: {this.props.hour}, tickets: {this.props.tickets}.</p> */}
                    <Link className="btn-link" to={`/`}>
                        <button className="back-btn" id="movies">
                            Home page
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Reservation;
