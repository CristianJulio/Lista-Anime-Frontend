import React, { useContext, useEffect } from "react";
import Header from "./Header";
import animeContext from "../context/anime/animeContext";
import { useParams } from "react-router-dom";
import Styled from "@emotion/styled";
import Spinner from "./Spinner";
import SideBarInfo from "./SideBarInfo";
import Characters from "./Characters";

const AnimeInfoStyled = Styled.div`
  width: 1200px;
  margin: 0 auto;

  @media screen and (min-width: 1920px) {
    width: 1520px;
  }

  div.cabecera {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 25px;

    img {
      margin-right: 25px;
      box-shadow: 0 0 29px rgba(49,54,68,.25);
      border-radius: 4px;
      height: 337px;
      width: 225px;
      object-fit: cover;
    }
    
    div.text {
      display: block;

      h2 {
        margin-bottom: 15px;
        color: rgb(92,114,138);
        font-size: 1.3rem;
        font-weight: 400;
      }

      p {
        text-align: justify;
        line-height: 22px;
        color: rgb(92,114,138);
        font-size: 0.9rem;

        button {
          border: none;
          background: none;
          margin-left: 10px;
          cursor: pointer;
          
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  div.content {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 25px;

    div.overview {
      margin-left: 25px;
    }
  }
`;

const AnimeInfo = () => {
  const { isFinished, currentAnime, getAnimeInfo, cleanAnimeInfo } = useContext(
    animeContext
  );
  const { animeId } = useParams();

  useEffect(() => {
    getAnimeInfo(animeId);

    return () => cleanAnimeInfo();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      {isFinished ? (
        <AnimeInfoStyled>
          <div className="cabecera">
            <img src={currentAnime.image_url} alt="" />
            <div className="text">
              <h2>{currentAnime.title}</h2>
              <p>{currentAnime.synopsis}</p>
            </div>
          </div>

          <div className="content">
            <SideBarInfo />
            
            <div className="overview">
              <Characters />
            </div>
          </div>
        </AnimeInfoStyled>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default AnimeInfo;
