import React from "react";
import AnimeState from "./context/anime/animeState";
import UseAniState from "./context/usersAnimes/useAniState";
import UserState from "./context/users/userState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ResultadosBusqueda from "./components/busqueda/ResultadosBusqueda";
import AnimeInfo from "./components/animeInfo/AnimeInfo";
import Browser from "./components/browser/Browser";
import HomePage from "./components/homepage/HomePage";
import TopAnimes from "./components/top_animes/TopAnimes";
import Temporadas from "./components/temporadas/Temporadas";
import AuthState from "./context/auth/authState";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private/PrivateRoute";
import Signup from "./components/auth/Signup";
import Profile from "./components/profile/Profile";
import Settings from "./components/settings/Settings";

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
                <PrivateRoute path="/browse/:page">
                  <Browser />
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
                <PrivateRoute path="/seasonal">
                  <Temporadas />
                </PrivateRoute>
                <PrivateRoute path="/profile/:username">
                  <Profile />
                </PrivateRoute>
                <PrivateRoute path="/user/settings">
                  <Settings />
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
