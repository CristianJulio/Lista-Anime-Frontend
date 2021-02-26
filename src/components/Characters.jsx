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
    grid-gap: 15px 25px;
    width: 950px;

    @media screen and (min-width: 1920px) {
      width: 1270px;
      grid-template-columns: repeat(3, 1fr);
    }

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

  div.staff {
    margin-top: 25px;

    div.items {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 15px 25px;
      width: 950px;

      @media screen and (min-width: 1920px) {
        width: 1270px;
        grid-template-columns: repeat(3, 1fr);
      }

      div.item {
        background: #FFF;
        border-radius: 4px;
        background: rgb(250,250,250);
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
    }
  }
`;

const Characters = () => {
  const { isFinished, currentAnime } = useContext(animeContext);
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

  console.log(data);

  return (
    <CharactersStyled>
      <h2>Characters</h2>

      {isFinished ? (
        <>
          <div className="characters">
            {data.length === 0 ? (
              <p>There is no information about the characters</p>
            ) : (
              <>
                {data.map((d) => (
                  <div key={d.id} className="item">
                    <div className="character">
                      <img src={d.chara.image_url} alt="" />
                      <div className="text">
                        <p>{d.chara.name}</p>
                        <p>{d.chara.role}</p>
                      </div>
                    </div>
                    {d.chara.voice_actors.length !== 0 ? (
                      <div className="voice_actor">
                        <div className="text">
                          <p>{d.chara.voice_actors[0].name}</p>
                          <p>{d.chara.voice_actors[0].language}</p>
                        </div>
                        <img src={d.chara.voice_actors[0].image_url} alt="" />
                      </div>
                    ) : (
                      <div className="voice_actor">
                        <div className="text">
                          <p>Unknown</p>
                          <p>Unknown</p>
                        </div>
                        <img
                          src="https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
                          alt=""
                        />
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="staff">
            <h2>Staff</h2>
            <div className="items">
              {data.map((d) => (
                <div className="item">
                  <img src={d.staff.image_url} alt="" />
                  <div className="text">
                    <p>{d.staff.name}</p>
                    <p>{d.staff.positions[0]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </CharactersStyled>
  );
};

export default Characters;
