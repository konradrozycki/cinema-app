import axios from "axios";

export default axios.create({
    baseURL:
        "https://api.themoviedb.org/3/movie/upcoming?api_key=91d81c5467b5e5026e59a5ae782e7584&language=en-US&page=1",
});
