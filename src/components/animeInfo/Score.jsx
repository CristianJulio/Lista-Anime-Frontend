import React, { useContext } from 'react';
import { TitleScore, ScoreContainer, Item, BarItem, ItemText } from '../../styles/animeInfoStyles/ScoreStyledComp';
import animeContext from "../../context/anime/animeContext";

const Score = () => {
  const { currentAnime } = useContext(animeContext);
  let scores = [];

  for(let item in currentAnime.scores) {
    let sc = currentAnime.scores[item];
    scores.push(sc);
  }

  return (
    <div>
      <TitleScore>Score</TitleScore>

      <ScoreContainer>
        {scores.map((s, i) => (
          <Item key={s.votes}>
            <ItemText col="rgb(92,114,138)" fonSiz="0.8rem">{s.votes}</ItemText>
            <BarItem hgt={`${s.percentage * 2.5}%`}></BarItem>
            <ItemText col="rgba(0,0,0,.4)" fonSiz="0.7rem">{`${i+1}0`}</ItemText>
          </Item>
        ))}
      </ScoreContainer>
    </div>
  );
}
 
export default Score;