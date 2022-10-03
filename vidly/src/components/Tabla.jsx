import React, { Component } from "react";
import {getMovies} from '../services/fakeMovieService.js'





class Tabla extends Component {


    movies = getMovies();
    state = {
        listMovies : this.movies,
    };
    
    styles = {
        fontSize: 10,
        fontWeight: 'bold',
    }
    
    handleDelete = (movieToDelete) =>{
        
        
        this.setState({listMovies: this.state.listMovies.filter(movie => movie !== movieToDelete.movie)} )
        console.log(this.state.listMovies.filter(movie => movie !== movieToDelete.movie));
    }
    generateTable = () =>{
        if (this.state.listMovies.length){
            return  (<table>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th>Aca va un boton</th>
                        </tr>
                    
                        {this.state.listMovies.map(movie =>
                                            
                                            
                                                <tr> 
                                
                                                    <td>{movie["title"]}</td>
                                                    <td>{movie["genre"]["name"]}</td>
                                                    <td>{movie["numberInStock"]}</td>
                                                    <td>{movie["dailyRentalRate"]} </td>
                                                    <td>{<button onClick={() => this.handleDelete({movie})}>Eliminar </button>} </td>
                                                </tr>
                                                
                                        
                                    )
                                            
                        }
                            
                    </table>
            )
        }
        return <h2> Insert movies in array</h2>

    }
    render() {
        
        //{ this.state.tags.length === 0 && "Please create a new TAG!"}
        //{ this.renderTags() }

        return (
            
            <React.Fragment>
                <h1>Hi</h1>
                <hr />
                {this.generateTable()}
                
            </React.Fragment>
    );

    
  }

  
  
}

export default Tabla;
