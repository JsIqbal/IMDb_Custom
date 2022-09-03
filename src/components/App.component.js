import React, { Component } from "react";
// import axios from "axios";
import fetchMovies from "../service/fetch_movies";
// import Table from "./common/Table.component";
import StudentList from "./studentList.component";

class App extends Component {
    state = {
        data: {},
    }

    componentDidMount = () => {
        // const promise = axios.get('https://imdb-api.com/API/Top250Movies/k_s358sr29');
        this.setState({ ...this.state, data: fetchMovies() });
        // promise
        //     .then(response => {
        //         /*
        //         console.log("successful");
        //         console.log(response.data);

        //         this.setState({ ...this.state, data: response.data});
        //         */

        //         // this.setState({ ...this.state, data: fetchMovies() });
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     });
    }

    render() {
        const items = this.state.data.items || [];
        return (
            <div>
                <div className="container">
                    <br/>
                        <StudentList 
                    />
                </div>
            </div>
        );
    }
}
 
export default App;