import React, { Component } from "react";

/*
npm install --save react-bootstrap

import {Grid, Row, Col} from "react-bootstrap";
*/
//import { Row, Col } from "react-bootstrap";
/* 
install font awesome react https://fontawesome.com/v5/docs/web/use-with/react#get-started
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/free-regular-svg-icons
npm install --save @fortawesome/react-fontawesome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

const fullHeart = <FontAwesomeIcon icon={faHeart} />;
const emptyHeart = <FontAwesomeIcon icon={farHeart} />;
*/

import Pagination from "./common/pagination";

import { paginate } from "../utils/paginate.js";

import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
// Corrigiendo ListGroup
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc"},
  };

  componentDidMount() {
    const genres = [{ _id:"", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }
  handleLike = (movie) => {
    const movies = this.state.movies;
    const index = movies.indexOf(movie);

    movies[index].liked = !movies[index].liked;

    this.setState(movies);
  };

  handleDelete = (movieToDel) => {
    const movies = this.state.movies.filter((m) => m._id !== movieToDel._id);
    this.setState({ movies });
  };
  
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = path => {
    const sortColumn = {...this.state.sortColumn};
    if (sortColumn.path === path){
      sortColumn.order = (sortColumn.order === "asc") ?  "desc" :  "asc"; 
    }else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({sortColumn});


    
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
    } = this.state;
    /*
    Esto era la primera implementacion
    
    let moviesByGenre = allMovies;
    if(currentGenre !== "All" ){
      moviesByGenre =  allMovies.filter((movie) =>{
 
        return movie.genre.name === currentGenre;
      }
      
      );
    }
    //__.filter(items, {genre: {name: genreRequest} });
    //allMovies.map(movie => movie.genre.name === currentGenre);
    //console.log("Peliculas por genero",moviesByGenre.length);
    const count = moviesByGenre.length;
    */
    if (!count) return <p>There are no movies in the database</p>;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
        
    const sorted= _.orderBy(filtered, [sortColumn.path], sortColumn.order);

    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
              selectedItem={selectedGenre}
            ></ListGroup>
          </div>

          <div className="col">
            <p>Showing {filtered.length} movies in the database.</p>
            <MoviesTable
              movies={movies}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            ></MoviesTable>
            <Pagination
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            ></Pagination>
          </div>
        </div>
      </React.Fragment>
    );
  }
  /*
  
  */
}

export default Movies;
