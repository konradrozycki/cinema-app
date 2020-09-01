import React, { Component } from "react";
import "./HeroImage.css";

class HeroImage extends Component {
    render() {
        return (
            <img
                className="image"
                src="https://upload.wikimedia.org/wikipedia/commons/0/02/35mm_movie_negative.jpg"
                alt="The cinema"
            />
        );
    }
}

export default HeroImage;
