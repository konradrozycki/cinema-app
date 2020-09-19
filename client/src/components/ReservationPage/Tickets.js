import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Tickets.css";
import Axios from "axios";
import Auth from "../Auth/auth";

class Tickets extends Component {
    state = {
        showLogin: false,
        title: "",
        date: "",
        hour: "",
        tickets: 0,
        seats: [],
        createReservationDisabled: true,
    };

    onDayChange = (e) => {
        this.setState({
            date: `${e.currentTarget.value}`,
        });
        this.updateButtonState();
    };

    onHourChange = (e) => {
        this.setState({
            hour: `${e.currentTarget.value}`,
        });
        this.updateButtonState();
    };

    onTicketChange = (e) => {
        this.setState({
            tickets: Number(`${e.currentTarget.value}`),
        });
        this.updateButtonState();
    };

    onSeatChange = (e) => {
        if (e.currentTarget.className === "seat blocked") {
            return;
        } else if (e.currentTarget.className === "seat marked") {
            e.currentTarget.classList.remove("marked");
            this.setState({
                seats: this.state.seats.filter(function (value, index, arr) {
                    return value !== e.currentTarget.id;
                }),
            });
            return;
        } else if (this.state.tickets === this.state.seats.length) {
            return;
        }

        e.currentTarget.className = "seat marked";
        this.setState({
            seats: this.state.seats.concat(e.currentTarget.id),
        });
        this.updateButtonState();
    };

    updateButtonState() {
        const { date, hour, tickets } = this.state;
        if (date !== "" && hour !== "" && tickets > 0) {
            this.setState({
                createReservationDisabled: false,
            });
        }
    }

    renderRow = (name, seats) => {
        const cinemaRows = [];
        cinemaRows.push(
            <div key={name} className="row-name">
                {name}
            </div>
        );
        for (let i = 1; i <= seats; i++) {
            cinemaRows.push(
                <div
                    id={`${name}-${i}`}
                    ref={`${name}-${i}`}
                    key={`${name}-${i}`}
                    className={"seat"}
                    onClick={this.onSeatChange}
                >
                    {i}
                </div>
            );
        }
        return cinemaRows;
    };

    componentDidMount() {
        const url_string = window.location.href;
        const url = new URL(url_string);
        const title = url.searchParams.get("movie");
        this.setState({
            title: title,
        });
    }

    createReservation = async () => {
        const { date, hour, tickets, seats } = this.state;
        const url_string = window.location.href;
        const url = new URL(url_string);
        const title = url.searchParams.get("movie");
        const reservation = {
            title: title,
            date: date,
            hour: hour,
            tickets: tickets,
            seats: seats,
        };
        await Axios.post("addreservation", { reservation })
            .then((res) => {
                console.log(res);
                this.props.history.push("/completed-reservation");
            })
            .catch((err) => {
                if (err.message === "Request failed with status code 401") {
                    this.setState({ showLogin: true });
                } else if (
                    err.message === "Request failed with status code 400"
                ) {
                    alert("Kindly select same number of seats as tickets");
                } else {
                    console.log(err.message);
                }
            });
    };

    async markBlocked() {
        await Axios.post("getreservation", {
            title: this.state.title,
            hour: this.state.hour,
            date: this.state.date,
        })
            .then((res) => {
                console.log(res.data.reservations);
                let all = res.data.reservations.map((r) => r.seats);
                let blocked = [].concat.apply([], all);
                blocked.map((i) => {
                    document.getElementById(i).classList.add("blocked");
                });
            })
            .catch((err) => {});
    }

    render() {
        let today = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let tommorow = `${today + 1}`;
        let secondDayFromNow = `${today + 2}`;

        const { date, hour } = this.state;
        if (date !== "" && hour !== "") {
            this.markBlocked();
        }

        return (
            <div>
                <h1 className="showtimes">Showtimes</h1>

                <div className="reservation">
                    <form className="reservation-form">
                        <div className="seans-days">
                            <div className="radio-toolbar">
                                <h1>Day</h1>
                                <div className="radio">
                                    <input
                                        type="radio"
                                        value={today}
                                        id={today}
                                        name="radio-for-day"
                                        onClick={this.onDayChange}
                                    />
                                    <label htmlFor={today}>
                                        {today}.{month}
                                    </label>
                                </div>
                                <div className="radio">
                                    <input
                                        type="radio"
                                        value={tommorow}
                                        id={tommorow}
                                        name="radio-for-day"
                                        onClick={this.onDayChange}
                                    />
                                    <label htmlFor={tommorow}>
                                        {tommorow}.{month}
                                    </label>
                                </div>
                                <div className="radio">
                                    <input
                                        type="radio"
                                        value={secondDayFromNow}
                                        id={secondDayFromNow}
                                        name="radio-for-day"
                                        onClick={this.onDayChange}
                                    />
                                    <label htmlFor={secondDayFromNow}>
                                        {secondDayFromNow}.{month}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="seans-hour">
                            <div className="radio-toolbar">
                                <h1>Seans hour</h1>
                                <div className="radio">
                                    <input
                                        type="radio"
                                        value="9:00"
                                        id="nine-am"
                                        name="radio-for-hour"
                                        onClick={this.onHourChange}
                                    />
                                    <label htmlFor="nine-am">9:00</label>
                                </div>
                                <div className="radio">
                                    <input
                                        type="radio"
                                        value="12:30"
                                        id="half-past-twelve"
                                        name="radio-for-hour"
                                        onClick={this.onHourChange}
                                    />
                                    <label htmlFor="half-past-twelve">
                                        12:30
                                    </label>
                                </div>
                                <div className="radio">
                                    <input
                                        type="radio"
                                        value="16:30"
                                        id="half-past-four"
                                        name="radio-for-hour"
                                        onClick={this.onHourChange}
                                    />
                                    <label htmlFor="half-past-four">
                                        16:30
                                    </label>
                                </div>
                                <div className="radio">
                                    <input
                                        type="radio"
                                        value="20:10"
                                        id="ten-past-twenty"
                                        name="radio-for-hour"
                                        onClick={this.onHourChange}
                                    />
                                    <label htmlFor="ten-past-twenty">
                                        20:10
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="tickets">
                            <h1>Tickets</h1>
                            <p>You can buy max 6 tickets per seans.</p>
                            <div className="ticket-type">
                                <label htmlFor="tickets">
                                    Ticket cost - 8 €. Ticket number:
                                    <select
                                        name="ticket"
                                        className="tickets-number"
                                        onChange={this.onTicketChange}
                                    >
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    </form>

                    <div className="hall">
                        <div className="seats">
                            <div className="screen">Screen</div>
                            <div className="row d-flex justify-content-center text-center">
                                {this.renderRow("A", 20)}
                            </div>
                            <div className="row d-flex justify-content-center text-center">
                                {this.renderRow("B", 20)}
                            </div>
                            <div className="row d-flex justify-content-center text-center">
                                {this.renderRow("C", 20)}
                            </div>
                            <div className="row d-flex justify-content-center text-center">
                                {this.renderRow("D", 20)}
                            </div>
                            <div className="row d-flex justify-content-center text-center">
                                {this.renderRow("E", 20)}
                            </div>
                            <div className="row d-flex justify-content-center text-center">
                                {this.renderRow("F", 20)}
                            </div>
                            <div className="row d-flex justify-content-center text-center">
                                {this.renderRow("G", 20)}
                            </div>
                            <div className="row d-flex justify-content-center text-center">
                                {this.renderRow("H", 20)}
                            </div>
                            <div className="row d-flex justify-content-center text-center">
                                {this.renderRow("I", 20)}
                            </div>
                        </div>
                    </div>
                    <Link to={`/`}>
                        <button className="back-btn" id="movies">
                            Back
                        </button>
                    </Link>
                    <button
                        className="reservation-btn"
                        id="seats-reservation"
                        onClick={this.createReservation}
                        disabled={this.state.createReservationDisabled}
                    >
                        Reserve Seats
                    </button>
                </div>
                <Auth
                    show={this.state.showLogin}
                    onHide={(user) => {
                        this.setState({ showLogin: false });
                        this.props.setUser(user);
                    }}
                />
            </div>
        );
    }
}

export default Tickets;
