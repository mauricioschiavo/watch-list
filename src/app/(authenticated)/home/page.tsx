'use client'

import { useEffect, useState } from "react"
import { useFirebase } from "../../../hooks/usefirebase";
import { QuerySnapshot } from "@firebase/firestore";

export default () => {

    const [ movies, setMovies ] = useState<QuerySnapshot>();
    const { db, query, collection, getDocs } = useFirebase();

    async function load() {
        const q = query(collection(db, "movies"));

        const querySnapshot = await getDocs(q);
        setMovies(querySnapshot);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    }

    useEffect(() => {
        console.log("Sample");
        load();
    }, []);

    return <>
        <main>Home</main>
        {movies?.docs.map(movie => {
            return <li key={movie.id}> {movie.data()[ "name" ]} </li>
        })}
    </>
}