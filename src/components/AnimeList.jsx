import React from "react";
import AnimeCard from "./AnimeCard";
import { StyledAnimeList } from "../styles/AnimeListStyledComp";

const AnimeList = ({ animes }) => {
  return (
    <StyledAnimeList>
      {animes.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </StyledAnimeList>
  );
};

export default AnimeList;
