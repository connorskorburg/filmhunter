import React from 'react';
import './index.css';
// movie components
import Movies from './components/movies/Movies';
import Movie from './components/movies/Movie';
//show components
import Shows from './components/shows/Shows';
// layout components
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
//context state
import MovieState from './context/movie/MovieState';
import ShowState from './context/show/ShowState';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

  // Get movie by ID
  // const url = `https://api.themoviedb.org/3/movie/337401?api_key=${movie_db_key}&language=en-US`

  //Get most popular TV Shows
  // const url = `https://api.themoviedb.org/3/tv/popular?api_key=${movie_db_key}`

  // Get TV Show by ID
  // const url = `https://api.themoviedb.org/3/tv/62286?api_key=${movie_db_key}&language=en-US`

  // Get latest TV Shows
  //const url = `https://api.themoviedb.org/3/tv/latest?api_key=${movie_db_key}&language=en-US`


  return (
    <MovieState>
      <ShowState>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/movies" component={Movies} />
              <Route exact path='/movies/:id' component={Movie} />
              <Route exact path='/shows' component={Shows} />
            </Switch>
          </div>
        </Router>
      </ShowState>
    </MovieState>
  );
}

export default App;
