'use client'
import axios from 'axios';

const movieDb_config = {
    key: process.env.thdb_key,
    thdb_readtoken: process.env.thdb_readtoken,
};

function getMovies() {
    return axios.get("https://api.themoviedb.org/3/discover/movie", {
        headers: {
            "Authorization": "Bearer " + movieDb_config.thdb_readtoken
        }
    });
}

function useMovieDb() {
    return { getMovies }
}

export { useMovieDb }