import { getMovies } from './services/fakeMovieService';
import './App.css';

function App() {
  const movies = getMovies();
  
//  const items = movies.map(movie => `<li>${movie}</li>`);
  movies.map(movie => console.log(movie["title"]+movie["genre"]["name"]+movie["numberInStock"]+movie["dailyRentalRate"]));
  return (
   <h1></h1>
  );
}

export default App;
