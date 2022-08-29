import React, { Component } from "react";
import axios from "axios";
import fetchMovies from "../service/fetch_movies";

class App extends Component {
    state = {
        data: {},
    }

    componentDidMount = () => {
        const promise = axios.get('https://imdb-api.com/API/Top250Movies/k_s358sr29');
        
        promise
            .then(response => {
                /*
                console.log("successful");
                console.log(response.data);

                this.setState({ ...this.state, data: response.data});
                */

                this.setState({ ...this.state, data: fetchMovies() });
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        const items = this.state.data.items || [];
        return (
            <div>
                <div className="container">
                <br/>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Poster</th>
                                <th scope="col">Sl</th>
                                <th scope="col">Movie Name</th>
                                <th scope="col">Like</th>
                                <th scope="col">Likes Counted</th>
                                <th scope="col">Your Review</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                items.map((item) => {
                                    const id = item.id;
                                    const rank = item.rank;
                                    const fullTitle = item.fullTitle;
                                    const image = item.image;
                                    const imDbRating = item.imDbRating;
                                    const like = parseInt(item.imDbRatingCount);

                                    return (
                                        <tr key = { id } >
                                            <td> 
                                                <img style = { { height:'200px', width: '150px' } } src = { `${image}` } />
                                            </td>
                                            <th scope="row">{ rank }</th>

                                            <td>{ fullTitle }</td>

                                            <td>{ imDbRating }</td>
                                            <td>{ like }</td>
                                            <td>
                                                <i class="fa-regular fa-star"></i>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
 
export default App;