'use client'

import { useEffect, useState } from "react"
import { useMovieDb } from "../../../hooks/useMovieDb";

export default () => {

    const { getMovies } = useMovieDb();

    const [ movies, setMovies ] = useState([]);

    async function loadApi() {
        const movies = await getMovies();
        setMovies(movies.data?.results);
        console.log("DB", movies);
    }

    useEffect(() => {
        console.log("Sample");
        loadApi();
    }, []);

    return <>
        <main>Home</main>
        <h1>Saved Movies</h1>
        <h1>For You</h1>
        {movies?.map(movie => {
            return <li key={movie[ "id" ]}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie[ "backdrop_path" ]}`} />
                {JSON.stringify(movie)}
            </li>
        })}
    </>
}