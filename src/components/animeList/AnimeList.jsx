import React, { useContext, useEffect, useState } from "react";
import Header from "../header/Header";
import Spinner from "../general/Spinner";
import userContext from "../../context/users/usersContext";
import { useParams } from "react-router";
import {
  AnimeListStyled,
  EmptyMessage,
} from "../../styles/animeList/animeList.styles";
import Filtro from "./Filtro";
import Lists from "./Lists";

const AnimeList = () => {
  const {
    userAnimeList,
    isFinished,
    getUserAnimeList,
    cleanUserAnimeList,
  } = useContext(userContext);

  const [search, setSearch] = useState("");

  const [newList, setNewList] = useState({
    watching: [],
    planning: [],
    completed: [],
    paused: [],
    dropped: [],
    rewatching: [],
  });

  const { username } = useParams();

  useEffect(() => {
    getUserAnimeList(username);
    return () => cleanUserAnimeList();
    // eslint-disable-next-line
  }, [username]);

  let empty = true;

  /* Verifico si el usuario no tiene ningún anime agregado en su lista 
  para poder mostrar un mensaje indicando que no tiene nada en su lista */
  for (let item in userAnimeList) {
    if (userAnimeList[item].length !== 0) {
      empty = false;
    }
  }

  return (
    <>
      <Header />
      <>
        {empty && isFinished ? (
          <EmptyMessage>Nothing to show yet...</EmptyMessage>
        ) : (
          <AnimeListStyled>
            {isFinished ? (
              <>
                <Filtro search={search} setSearch={setSearch} setNewList={setNewList} />
                <Lists search={search} newList={newList} />
              </>
            ) : (
              <Spinner />
            )}
          </AnimeListStyled>
        )}
      </>
    </>
  );
};

export default AnimeList;
