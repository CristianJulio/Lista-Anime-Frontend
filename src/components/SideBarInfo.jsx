import React, { useContext } from "react";
import animeContext from "../context/anime/animeContext";
import Styled from "@emotion/styled";

const SideBarInfoStyled = Styled.div`
  border-radius: 4px;
  background: #FFFFFF;
  width: 195px;
  padding: 10px 15px;

  div.info-set {
    font-size: 0.9rem;
    margin-bottom: 14px;

    div:nth-of-type(1) {
      color: rgb(92,114,138);
      font-weight: 500;
      margin-bottom: 3px;
    }

    div:nth-of-type(2) {
      color: rgb(146,153,161);

       p {
         line-height: 21px;
       }
    }
  }
`;

const SideBarInfo = () => {
  const { currentAnime } = useContext(animeContext);

  return (
    <SideBarInfoStyled>
      <div className="info-set">
        <div>Type</div>
        <div>{currentAnime.type}</div>
      </div>
      <div className="info-set">
        <div>Broadcast</div>
        <div>{currentAnime.broadcast}</div>
      </div>
      <div className="info-set">
        <div>Source</div>
        <div>{currentAnime.source}</div>
      </div>
      <div className="info-set">
        <div>Score</div>
        <div>{currentAnime.score}</div>
      </div>
      <div className="info-set">
        <div>Rating</div>
        <div>{currentAnime.rating}</div>
      </div>
      <div className="info-set">
        <div>Episodes</div>
        <div>{currentAnime.episodes}</div>
      </div>
      <div className="info-set">
        <div>Duration</div>
        <div>{currentAnime.duration}</div>
      </div>
      <div className="info-set">
        <div>Status</div>
        <div>{currentAnime.status}</div>
      </div>
      <div className="info-set">
        <div>Japanse Title</div>
        <div>{currentAnime.title_japanese}</div>
      </div>
      <div className="info-set">
        <div>Genres</div>
        {currentAnime.genres ? (<div>{currentAnime.genres.map(g => <p key={g.name} >{g.name}</p>)}</div>) : "Unknown"}
      </div>
      <div className="info-set">
        <div>Producers</div>
        <div>
          {currentAnime.producers
            ? currentAnime.producers.map((p) => <p key={p.name}>{p.name}</p>)
            : null}
        </div>
      </div>
      {currentAnime.aired ? (
        <>
          <div className="info-set">
            <div>Start Date</div>
            <div>{new Date(currentAnime.aired.from).toLocaleDateString()}</div>
          </div>
          <div className="info-set">
            <div>End Date</div>
            <div>
              {currentAnime.aired.to
                ? new Date(currentAnime.aired.to).toLocaleDateString()
                : "Unknown"}
            </div>
          </div>
        </>
      ) : null}
    </SideBarInfoStyled>
  );
};

export default SideBarInfo;
