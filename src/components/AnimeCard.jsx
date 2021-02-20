import React from 'react';
import Styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const TarjetaStyled = Styled.div`
  width: 185px;
  
  img {
    box-shadow: 0 0 5px rgba(0,0,0,.1);
    border-radius: 4px;
    height: 275px;
    width: 100%;
    object-fit: cover;
  }

  p {
    color: #808799;
    font-size: 1rem;
    line-height: 21px;
    font-weight: 600;
    margin-top: 10px;
  }
`;

const AnimeCard = ({ anime }) => {
  return (
    <Link to={`/anime/${anime.mal_id}/${anime.title.split(' ').join('-')}`}>
      <TarjetaStyled>
        <img src={anime.image_url} alt=""/>
        <p>{anime.title}</p>
      </TarjetaStyled>
    </Link>
  );
}
 
export default AnimeCard;