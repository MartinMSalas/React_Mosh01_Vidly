import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies(),
      } 
    render() { 
        const { length : count} = this.state.movies
        if (!(this.state.movies.length))
            return <p>There are no movies in the database</p>;
        return (
            <React.Fragment>

            <p>Showing {count} movies in the database.</p>
            <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map (movie =>  (                           
                            
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate} </td>
                                    <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                            )
                        )
                        }
                    </tbody>
                </table>       
            </React.Fragment>
        )
    }
    handleDelete = (movieToDel) => {
        const movies = this.state.movies.filter(m => m._id != movieToDel._id);
        this.setState({ movies});
    }
}
 
export default Movies;