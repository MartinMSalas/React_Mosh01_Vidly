import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

/*
install font awesome react https://fontawesome.com/v5/docs/web/use-with/react#get-started
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/free-regular-svg-icons
npm install --save @fortawesome/react-fontawesome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

//import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
//import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';

class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  render() {
    const { length: count } = this.state.movies;
    if (!this.state.movies.length)
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
              <th>Like</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate} </td>
                <td onClick={()=> this.handleLikeClick(movie)}>{this.handleLike(movie)}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
  handleLikeClick = (movie) => {
    
    const movies = this.state.movies;
    const index = movies.indexOf(movie);

    movies[index].liked = !movies[index].liked;

    this.setState(movies);
    


  }
  handleLike = (movie) => {
    
    const fullHeart = <FontAwesomeIcon icon={faHeart} />;
    const emptyHeart = <FontAwesomeIcon icon={farHeart} />;
    if(movie.liked){
      return fullHeart;
    }else{
      return emptyHeart;
    }
  }
  handleDelete = (movieToDel) => {
    const movies = this.state.movies.filter((m) => m._id !== movieToDel._id);
    this.setState({ movies });
  };
}

export default Movies;
