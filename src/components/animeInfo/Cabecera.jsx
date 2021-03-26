import React, { useContext } from "react";
import animeContext from "../../context/anime/animeContext";
import {
  StyledCabecera,
  ImgCabecera,
  TitleCabecera,
  SinopsisCabecera,
} from "../../styles/animeInfoStyles/CabeceraStyledComp";

const Cabecera = () => {
  const { currentAnime } = useContext(animeContext);

  return (
    <StyledCabecera>
      <ImgCabecera src={currentAnime.image_url} alt="" />
      <div>
        <TitleCabecera>{currentAnime.title}</TitleCabecera>
        <SinopsisCabecera>{currentAnime.synopsis}</SinopsisCabecera>
      </div>
    </StyledCabecera>
  );
};

export default Cabecera;
