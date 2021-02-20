import React, { useContext } from "react";
import Spinner from "./Spinner";
import AnimeCard from "./AnimeCard";
import AnimeContext from "../context/anime/animeContext";
import Styled from "@emotion/styled";

const AnimeListStyled = Styled.div`
  margin-bottom: 25px;

  div.content {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 25px;
    width: 1200px;
    margin: 0 auto;

    a {
      text-decoration: none;
    }
  }
`;

const AnimeList = ({ animes }) => {
  const { isFinished } = useContext(AnimeContext);

  return (
    <AnimeListStyled>
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
