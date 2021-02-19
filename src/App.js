import React from 'react';
import AnimeList from './components/AnimeList';
import AnimeState from './context/anime/animeState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <AnimeState>
      <Router>
        <Switch>
          <Route exact path="/" component={AnimeList} />
        </Switch>
      </Router>
    </AnimeState>
  );
}

export default App;
