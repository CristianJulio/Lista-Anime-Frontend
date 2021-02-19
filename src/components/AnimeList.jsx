import React, { useContext } from "react";
import AnimeFilter from "./AnimeFilter";
import Header from "./Header";
import Spinner from "./Spinner";
import AnimeCard from "./AnimeCard";
import AnimeContext from "../context/anime/animeContext";
import Styled from "@emotion/styled";

const AnimeListStyled = Styled.div`

  div.content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px;
    width: 1200px;
    margin: 25px auto;
  }
`;

const AnimeList = () => {
  const { animes, isFinished } = useContext(AnimeContext);

  return (
    <AnimeListStyled>
      <Header />
      <AnimeFilter />

      {isFinished ? (
        <div className="content">
          {animes.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </AnimeListStyled>
  );
};

export default AnimeList;
