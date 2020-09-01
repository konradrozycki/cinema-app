import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Movies from "./HomePage/Movies";
import Header from "./Header/Header";
import Reservation from "./ReservationPage/Reservation";
import Tickets from "./ReservationPage/Tickets";
import Footer from "./Footer/Footer";
import HeroImage from "./HeroImage/HeroImage";
import ComingSoon from "./ComingSoon/ComingSoon";
import Prices from "./Prices/Prices";
import Contact from "./Contact/Contact";

import "./ReservationPage/Tickets.css";
import Profile from './Profile/Profile'

class App extends Component {
    state = {
        showLogin: false,
        user: null,
    };
    setLogin = (val) => {
        this.setState({ showLogin: val });
    };
    setUser = (val) => {
        this.setState({ user: val });
    };
    componentDidMount() {
        let user = localStorage.getItem("user");
        if (user && !this.state.user) {
            this.setState({ user });
        }
    }
    render() {
        return (
            <>
                <Header
                    {...this.props}
                    setLogin={this.setLogin}
                    setUser={this.setUser}
                    user={this.state.user}
                    showLogin={this.state.showLogin}
                />
                <HeroImage />
                <BrowserRouter>
                    <Route exact path="/" component={Movies}></Route>
                    <Route path="/first-step" render={(props) => (<Tickets {...props} setUser={this.setUser} />)}></Route>
                    <Route
                        path="/completed-reservation"
                        component={Reservation}
                    ></Route>
                    <Route path="/profile" render={() => (<Profile user={localStorage.getItem('user')} />)}></Route>
                    <Route path="/coming-soon" component={ComingSoon}></Route>
                    <Route path="/prices" component={Prices}></Route>
                    <Route path="/contact" component={Contact}></Route>
                </BrowserRouter>
                <Footer />
            </>
        );
    }
}

export default App;
