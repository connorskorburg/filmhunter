import React from 'react';
import './index.css';
// movie components
import Movies from './components/movies/Movies';
import Movie from './components/movies/Movie';
//show components
import Shows from './components/shows/Shows';
// import Show from './components/shows/Show';
// layout components
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
//context state
import MovieState from './context/movie/MovieState';
import ShowState from './context/show/ShowState';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
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
              {/* <Route exact path='/shows/:id' component={Show} /> */}
            </Switch>
          </div>
        </Router>
      </ShowState>
    </MovieState>
  );
}

export default App;
