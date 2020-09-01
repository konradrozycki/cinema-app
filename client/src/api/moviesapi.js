import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/now_playing?api_key=284b6c29bdbbc5b45a7d60b8e41050e6&language=en-US&page=1'
})