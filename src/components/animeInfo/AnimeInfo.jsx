import React, { useContext, useEffect, useState } from "react";
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
import AnimeStatus from "./AnimeStatus";
import useCharacterStaff from '../../hooks/useCharacterStaff';

const AnimeInfo = () => {
  const { isFinished, currentAnime, getAnimeInfo, cleanAnimeInfo } = useContext(animeContext);
  const { animeId } = useParams();
  const [isbigscreen, setIsBigScreen] = useState(false)

  const updateSize = () => {
    setIsBigScreen(window.innerWidth >= 1920);
  }
  
  useEffect(() => {
    updateSize()
    window.addEventListener("resize", updateSize);
    getAnimeInfo(animeId);
    return () => cleanAnimeInfo();
    // eslint-disable-next-line
  }, []);

  const [getItems] = useCharacterStaff(isbigscreen ? 6 : 4);

  let characters, staff;

  if(currentAnime.characters) {
    const [chara, staf] = getItems(currentAnime);

    characters = chara;
    staff = staf;
  }

  return (
    <>
      <Header />
      
      {isFinished ? (
        <StyledAnimeInfo>
          <Cabecera />
          <AnimeStatus />
          <ContentContainer>
            <SideBarInfo />
            <div className="overview">
              {currentAnime.characters && currentAnime.staff ? (
                <>
                  {characters.length !== 0 ? ( <Characters data={characters} /> ) : null}
                  {staff.length !== 0 ? ( <Staff data={staff} /> ) : null}
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
