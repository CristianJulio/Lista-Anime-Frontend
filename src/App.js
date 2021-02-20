import React from 'react';
import AnimeState from './context/anime/animeState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ResultadosBusqueda from './components/ResultadosBusqueda';
import AnimesTemporada from './components/AnimesTemporada';

function App() {
  return (
    <AnimeState>
      <Router>
        <Switch>
          <Route exact path="/" component={AnimesTemporada} />
          <Route path="/search/:nombreAnime/:page" component={ResultadosBusqueda} />
        </Switch>
      </Router>
    </AnimeState>
  );
}

export default App;
