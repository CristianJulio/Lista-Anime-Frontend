import React from "react";
import styled from 'styled-components';
import Score from './Score';
import Status from './Status';

const ContentContainerStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
  width: 950px;
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
