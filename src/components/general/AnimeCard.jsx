import React from 'react';
import { EnlaceAnimeCard, ImgAnimeCard, TitleAnimeCard } from '../../styles/general/AnimeCardStyledComp';

const AnimeCard = ({ anime }) => {
  return (
    <EnlaceAnimeCard to={`/anime/${anime.mal_id}/${anime.title.split(' ').join('-')}`}>
      <ImgAnimeCard src={anime.image_url} alt=""/>
      <TitleAnimeCard>{anime.title}</TitleAnimeCard>
    </EnlaceAnimeCard>
  );
}
 
export default AnimeCard;