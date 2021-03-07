import React from "react";
import AnimeCard from "./AnimeCard";
import { StyledAnimeList, Text } from "../../styles/general/AnimeListStyledComp";

const AnimeList = ({ animes }) => {
  return (
    <>
      {animes.length !== 0 ? (
        <StyledAnimeList>
        {animes.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </StyledAnimeList>
      ) : <Text>No se encontraron resultados</Text>}
    </>
  );
};

export default AnimeList;
