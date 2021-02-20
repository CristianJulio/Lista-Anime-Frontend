import React, { useContext } from "react";
import Styled from "@emotion/styled";
import animeContext from "../context/anime/animeContext";

const CharactersStyled = Styled.div`
  h2 {
    font-weight: 500;
    font-size: 0.9rem;
    color: rgb(92,114,138);
    margin-bottom: 10px;
  }

  div.characters {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    width: 750px;

    div.item {
      display: flex;
      justify-content: space-between;
      background: #FFF;
      border-radius: 4px;
      background: rgb(250,250,250);

      & > div {
        display: flex;
        justify-content: flex-start;

        img {
          width: 60px;
          height: 80px;
          object-fit: cover;
        }

        div.text {
          display: flex;
          flex-flow: column wrap;
          justify-content: space-between;
          padding: 10px;

          p:nth-of-type(1) {
            color: rgb(92,114,138);
            font-weight: 400;
            font-size: 0.8rem;
          }

          p:nth-of-type(2) {
            color: rgb(146,153,161);
            font-weight: 300;
            font-size: 0.7rem;
          }
        }
      }

      div.character {
        img {
          border-radius: 4px 0 0 4px;
        }
      }

      div.voice_actor {
        img {
          border-radius: 0 4px 4px 0;
        }

        div.text {
          p {
            text-align: right;
          }
        }
      } 
    }
  }
`;

const Characters = () => {
  const { currentAnime } = useContext(animeContext);
  let data = [];

  // Extraigo 6 personaje para no tener que mostrar todos
  if (currentAnime.characters) {
    for (let i = 0; i < 6; i++) {
      data.push({
        id: i,
        chara: currentAnime.characters[i],
        staff: currentAnime.staff[i],
      });
    }
  }

  console.log(data);

  return (
    <CharactersStyled>
      <h2>Characters</h2>
      {currentAnime.characters ? (
        currentAnime.characters.length !== 0 ? (
          <div className="characters">
            {data.map((d) => (
              <div className="item">
                <div className="character">
                  <img src={d.chara.image_url} alt="" />
                  <div className="text">
                    <p>{d.chara.name}</p>
                    <p>{d.chara.role}</p>
                  </div>
                </div>
                <div className="voice_actor">
                  <div className="text">
                    <p>{d.chara.voice_actors[0].name}</p>
                    <p>{d.chara.voice_actors[0].language}</p>
                  </div>
                  <img src={d.chara.voice_actors[0].image_url} alt="" />
                </div>
              </div>
            ))}
          </div>
        ) : "There is no information about the characters"
      ) : null}
    </CharactersStyled>
  );
};

export default Characters;
