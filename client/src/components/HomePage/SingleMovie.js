import React, { Component } from "react";
import "./SingleMovie.css";
import { Link } from "react-router-dom";

class SingleMovie extends Component {
    state = { posterUrl: "" };

    render() {
        return (
            <div className="movie">
                <div className="movie-header">
                    <h3 className="movie-title">
                        {this.props.movieInfo.title}
                    </h3>
                </div>
                <div className="about-movie">
                    <img
                        className="poster"
                        src={this.props.posterUrl}
                        alt={`Poster of movie: ${this.props.movieInfo.title}`}
                    />
                    <div className="movie-overview">
                        <p className="movie-descritpion">
                            {this.props.movieInfo.overview}
                        </p>
                        <h5>
                            The avarage note of the film is:{" "}
                            {this.props.movieInfo.vote_average}
                        </h5>
                        <div className="movie-trailer"></div>
                        <div>
                            <Link
                                to={`/first-step?movie=${this.props.movieInfo.original_title}`}
                            >
                                <button className="reserve-tickets-btn">
                                    Make reservation
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleMovie;
