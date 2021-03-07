import React, { useContext, useEffect } from "react";
import Header from "../header/Header";
import animeContext from "../../context/anime/animeContext";
import { useParams } from "react-router-dom";
import Spinner from "../general/Spinner";
import SideBarInfo from "./SideBarInfo";
import Stats from "./Stats";
import Cabecera from "./Cabecera";
import { StyledAnimeInfo, ContentContainer } from '../../styles/animeInfoStyles/AnimeInfoStyledComp';
import Staff from "./Staff";
import Characters from "./Characters";

const AnimeInfo = () => {
  const { isFinished, currentAnime, getAnimeInfo, cleanAnimeInfo } = useContext(animeContext);
  const { animeId } = useParams();

  useEffect(() => {
    getAnimeInfo(animeId);
    return () => cleanAnimeInfo();
    // eslint-disable-next-line
  }, []);

  let data = [];

  // Extraigo 6 personaje para no tener que mostrarlos a todos
  if (currentAnime.characters) {
    for (let i = 0; i < 6; i++) {
      if (
        currentAnime.characters[i] === undefined ||
        currentAnime.staff[i] === undefined
      )
        break;

      data.push({
        id: i,
        chara: currentAnime.characters[i],
        staff: currentAnime.staff[i],
      });
    }
  }

  return (
    <>
      <Header />
      
      {isFinished ? (
        <StyledAnimeInfo>
          <Cabecera />
          <ContentContainer>
            <SideBarInfo />
            <div className="overview">
              {currentAnime.characters && currentAnime.staff ? (
                <>
                  {currentAnime.characters.length !== 0 ? ( <Characters data={data} /> ) : null}
                  {currentAnime.staff.length !== 0 ? ( <Staff data={data} /> ) : null}
                </>
              ) : null}
              <Stats />
            </div>
          </ContentContainer>
        </StyledAnimeInfo>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default AnimeInfo;
