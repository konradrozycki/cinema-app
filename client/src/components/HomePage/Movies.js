import React, { Component } from "react";
import SingleMovie from "./SingleMovie";
import moviesapi from "../../api/moviesapi";
import "./Movies.css";

class Movies extends Component {
    state = { movies: [] };

    componentDidMount() {
        moviesapi
            .get()
            .then((res) => {
                this.setState({ movies: res.data.results.slice(0, 12) });
            })
            .catch((err) => console.log("Something went wrong"));
    }

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
                    <a className="fromRight" href="/contact">
                        Contact
                    </a>
                </div>
                <div className="movies">
                    {this.state.movies.map((movie) => (
                        <SingleMovie
                            movieInfo={movie}
                            key={movie.id}
                            posterUrl={
                                "https://image.tmdb.org/t/p/w342" +
                                movie.poster_path
                            }
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Movies;
