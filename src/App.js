import React from "react";
import AnimeState from "./context/anime/animeState";
import UseAniState from "./context/usersAnimes/useAniState";
import UserState from "./context/users/userState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ResultadosBusqueda from "./components/busqueda/ResultadosBusqueda";
import AnimeInfo from "./components/animeInfo/AnimeInfo";
import HomePage from "./components/homepage/HomePage";
import TopAnimes from "./components/top_animes/TopAnimes";
import AuthState from "./context/auth/authState";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private/PrivateRoute";
import Signup from "./components/auth/Signup";
import AnimeList from "./components/animeList/AnimeList";
import Settings from "./components/settings/Settings";
import Search from "./components/search/Search";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <AnimeState>
      <AuthState>
        <UseAniState>
          <UserState>
            <Router>
              <Switch>
                <PrivateRoute exact path="/">
                  <HomePage />
                </PrivateRoute>
                <PrivateRoute path="/search/:nombreAnime/:page">
                  <ResultadosBusqueda />
                </PrivateRoute>
                <PrivateRoute path="/anime/:animeId/:nombreAnime">
                  <AnimeInfo />
                </PrivateRoute>
                <PrivateRoute path="/top/:type">
                  <TopAnimes />
                </PrivateRoute>
                <PrivateRoute path="/list/:username">
                  <AnimeList />
                </PrivateRoute>
                <PrivateRoute path="/user/settings">
                  <Settings />
                </PrivateRoute>
                <PrivateRoute path="/browse/:page">
                  <Search />
                </PrivateRoute>
                <PrivateRoute path="/profile/:username">
                  <Profile />
                </PrivateRoute>
                <Route path="/signin" component={Login} />
                <Route path="/signup" component={Signup} />
              </Switch>
            </Router>
          </UserState>
        </UseAniState>
      </AuthState>
    </AnimeState>
  );
}

export default App;
