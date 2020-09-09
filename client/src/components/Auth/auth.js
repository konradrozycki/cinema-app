import React, { Component } from "react";
import Axios from "axios";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./auth.css";

export default class auth extends Component {
    state = {
        loading: false,
        toggle_Loginin_Register: true,
        email: "",
        username: "",
        password: "",
    };
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        if (e.target.name === "login") {
            await Axios.post("signin", {
                email: this.state.email,
                password: this.state.password,
            })
                .then((res) => {
                    console.log(res);
                    localStorage.setItem("user", res.data.userdetail.username);
                    localStorage.setItem("id", res.data.userdetail._id);
                    localStorage.setItem("email", res.data.userdetail.email);
                    this.setState({ loading: false });
                    this.props.onHide(res.data.userdetail);
                })
                .catch((err) => {
                    this.setState({ loading: false });
                    console.log(err.message);
                });
        } else {
            console.log("sending = > ", {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
            });
            await Axios.post("signup", {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
            })
                .then((res) => {
                    console.log(res);
                    this.setState({ loading: false });
                    this.props.onHide();
                })
                .catch((err) => {
                    this.setState({ loading: false });
                    console.log(err.message);
                });
        }
    };
    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                backdrop="static"
                keyboard={false}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div className="d-flex justify-content-center h-100">
                    {this.state.toggle_Loginin_Register ? (
                        <div className="card">
                            <div className="card-header">
                                <h3>Sign In</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="input-group form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={this.state.email}
                                            required={true}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="input-group form-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            required={true}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <button
                                            className="btn float-right login_btn"
                                            onClick={this.onSubmit}
                                            name="login"
                                        >
                                            Login
                                        </button>
                                        {this.state.loading && (
                                            <span
                                                className="float-left spinner-border text-warning"
                                                role="status"
                                            />
                                        )}
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center links text-dark">
                                    Don't have an account?
                                    <button
                                        className="text-dark"
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.setState({
                                                toggle_Loginin_Register: !this
                                                    .state
                                                    .toggle_Loginin_Register,
                                            });
                                        }}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                                <div className="d-flex justify-content-center text-dark">
                                    <button className="text-dark">
                                        Forgot your password?
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="card">
                            <div className="card-header">
                                <h3>Register</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="input-group form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={this.state.email}
                                            required={true}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="input-group form-group">
                                        <input
                                            type="text"
                                            name="username"
                                            className="form-control"
                                            value={this.state.username}
                                            required={true}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="input-group form-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            required={true}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <button
                                            className="btn float-right login_btn"
                                            onClick={this.onSubmit}
                                            name="register"
                                        >
                                            Register
                                        </button>
                                        {this.state.loading && (
                                            <span
                                                className="float-left spinner-border text-warning"
                                                role="status"
                                            />
                                        )}
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                already have an account?
                                <button
                                    href=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({
                                            toggle_Loginin_Register: !this.state
                                                .toggle_Loginin_Register,
                                        });
                                    }}
                                    className="d-flex justify-content-center links text-dark"
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </Modal>
        );
    }
}
