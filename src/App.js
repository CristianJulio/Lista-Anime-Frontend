import React from 'react';
import AnimeState from './context/anime/animeState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ResultadosBusqueda from './components/busqueda/ResultadosBusqueda';
import AnimeInfo from './components/animeInfo/AnimeInfo';
import Browser from './components/browser/Browser';
import HomePage from './components/homepage/HomePage';
import TopAnimes from './components/top_animes/TopAnimes';
import Temporadas from './components/temporadas/Temporadas';

function App() {
  return (
    <AnimeState>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/browse/:page" component={Browser} />
          <Route path="/search/:nombreAnime/:page" component={ResultadosBusqueda} />
          <Route path="/anime/:animeId/:nombreAnime" component={AnimeInfo} />
          <Route path="/top/:type" component={TopAnimes} />
          <Route path="/seasonal" component={Temporadas} />
        </Switch>
      </Router>
    </AnimeState>
  );
}

export default App;
