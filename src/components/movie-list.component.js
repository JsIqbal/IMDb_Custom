import React, { useEffect, useState } from 'react';
import Table from './common/table.component';
import fetchMovies from '../service/fetch_movies';

function MovieList (props) { 
    const [movies, setMovies] = useState([]);
    const limit = 10;

    const columns = [ 
        { label: "ID", path: "id", content: (item, path) => <> {item[path]} </> }, 
        { label: "Rank", path: "rank", content: (item, path) => <> {item[path]} </> }, 
        { label: "Title", path: "fullTitle", content: (item, path) => <> {item[path]} </> },
        { label: "Poster", path: "image", content: (item, path) => <> <img src={item[path]} /> </> },
        { label: "Rating", path: "imDbRating", content: (item, path) => <> {item[path]} </> },
        { label: "Likes", path: "imDbRatingCount", content: (item, path) => <> {item[path]} </> },
    ];

    useEffect(() => {
        const data = fetchMovies();
        const movieList = data.items;
        setMovies(movieList);
    }, []);

    /*
        # Class Component:
        1. Mounting phase: 
            a. constructor,
            b. render,
            c. componentDidMount

        2. Updating phase:
            a. render,
            b. componentDidUpdate

        3. Unmounting phase:
            a. componentWillUnmount

        # Functional Component:
            componentDidMount, componentDidUpdate, componentWillUnmount => useEffect
    */

    return (
        <Table 
            items={movies}
            columns={columns}
            limit={limit}
            currentPage={3}
        />
    );
}
 
export default MovieList;