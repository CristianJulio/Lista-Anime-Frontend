import React from "react";
import styled from 'styled-components';
import Score from './Score';
import Status from './Status';

const ContentContainerStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;

  @media screen and (min-width: 1920px) {
    width: 950px;
  }

  @media screen and (min-width: 1920px) {
    width: 1150px;
  }
`;

const Stats = () => {

  return (
    <ContentContainerStats>
      <Status />        
      <Score />
    </ContentContainerStats>
  );
};

export default Stats;
