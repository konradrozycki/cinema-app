import React, { Component } from "react";
import "./Header.css";
import Auth from "../Auth/auth";
import Axios from "axios";

class Header extends Component {
    state = { loading: false };
    render() {
        return (
            <div className="header-info">
                {this.props.user ? (
                    <a className="profileLink" href="/profile">
                        <img
                            src="https://i.ibb.co/GWWYJtL/profile.png"
                            alt="profile"
                        ></img>
                    </a>
                ) : null}
                <a className="header-link" href="/">
                    <img
                        className="header-image"
                        src="https://i.ibb.co/jDB08y1/logo.png"
                        alt="cinema logo"
                    ></img>
                </a>
                <span className="text-right float-right">
                    <button
                        onClick={
                            this.props.user
                                ? async () => {
                                      this.setState({ loading: true });
                                      await Axios.post("signout");
                                      localStorage.removeItem("user");
                                      localStorage.removeItem("id");
                                      localStorage.removeItem("email");
                                      this.props.setUser(null);
                                      this.setState({ loading: false });
                                  }
                                : () => this.props.setLogin(true)
                        }
                        className="btn btn-warning"
                    >
                        {this.props.user ? "LogOut" : "LogIn"}
                        {this.state.loading && (
                            <span
                                style={{ height: "20px", width: "20px" }}
                                className="spinner-border text-danger"
                            />
                        )}
                    </button>
                </span>
                <Auth
                    show={this.props.showLogin}
                    onHide={(user) => {
                        this.props.setLogin(false);
                        this.props.setUser(user);
                    }}
                />
            </div>
        );
    }
}

export default Header;
