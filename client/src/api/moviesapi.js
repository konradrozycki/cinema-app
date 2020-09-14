import axios from "axios";

export default axios.create({
    baseURL:
        "https://api.themoviedb.org/3/movie/now_playing?api_key=625f896aab0ad1b450c3b2b05055f836&language=en-US&page=1",
});
