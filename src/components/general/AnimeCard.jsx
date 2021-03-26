import React from 'react';
import { EnlaceAnimeCard, ImgAnimeCard, TitleAnimeCard } from '../../styles/general/AnimeCardStyledComp';

const AnimeCard = ({ anime }) => {
  let linkAnimeName = `${anime.title.split(' ').join("-")}`;
  linkAnimeName = linkAnimeName.replace("%", "");
  
  return (
    <EnlaceAnimeCard to={`/anime/${anime.mal_id}/${linkAnimeName}`}>
      <ImgAnimeCard src={anime.image_url} alt=""/>
      <TitleAnimeCard>{anime.title}</TitleAnimeCard>
    </EnlaceAnimeCard>
  );
}
 
export default AnimeCard;