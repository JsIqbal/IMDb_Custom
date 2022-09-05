import React, { Component, useState } from "react";
import fetchMovies from "../service/fetch_movies";
import StudentList from "./studentList.component";
import MovieList from "./movie-list.component";

function App (props) {
    const [data, setData] = useState({});

    // componentDidMount () {
    //     this.setState({ ...this.state, data: fetchMovies() });
    // }

    const items = data.items || [];
    
    return (
        <div>
            <div className="container">
                <br/>
                <MovieList />
            </div>
        </div>
    );
}
 
export default App;