//import React from 'react';



const ListGroup = (props) => {
  /*
  currentGenre={currentPage}
              onGenreChange={this.handleGenreChange}
              genres = {genres}
               */


  /*
  
  
  let { genres, currentGenre, onGenreChange } = props;
  
  //genres = genres.push({ _id: "1", name: "All" });
  //console.log("Los generos guardados son ");
  //console.log(genres);
  console.log("El genero actual es: ", currentGenre);
  
   
  return (


    <div key={1} className="list-group">
      {genres.map( genre => (

          <button key={genre.name}
            className={genre.name === currentGenre ? "list-group-item active" : "list-group-item"}
              
            onClick={() => onGenreChange(genre.name)}
            
          >
            {genre.name}
              
              
          </button>
      
      ))}
    </div>

  );
  */
};

export default ListGroup;

/*


class ListGroup extends Component {
  state = {  } 
  render() { 
    return (
      

      <ul className="list-group">
        <li className="list-group-item active">All genres</li>
        
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    );
  }
}
 
export default ListGroup;

onst Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  
  let pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  //console.log(itemsCount % pageSize !== 0);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className={ page === currentPage ? "page-item active": "page-item"}>
            <a className="page-link" onClick={() => onPageChange(page)} style={{ cursor: "pointer" }}>
              {page}
            </a>
          </li>
        ))}
      </ul>   
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount : PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired, 
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
*/
