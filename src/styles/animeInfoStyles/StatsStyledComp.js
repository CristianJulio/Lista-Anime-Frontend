import styled, { css } from 'styled-components';
import { NormalTitle } from '../../globalStyle';

export const TitleStats = styled(NormalTitle)`
  margin-bottom: 10px;
`;

export const ContentContainerStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
  width: 950px;
`;

export const StatusContainer = styled.div`
  background: #FFF;
  border-radius: 4px;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 10px;
`;

export const Item = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

export const ItemTitle = styled.span`
  background: ${({bagCol}) => bagCol ? bagCol : "none"};
  color: #FFFFFF;
  padding: 6px 15px;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-bottom: 5px;
`;

export const ItemContent = styled.p`
  color: rgb(122,133,143);
  font-size: 0.8rem;
`;

export const ItemInnertext = styled.span`
  color: ${({col}) => col ? col : "#000"};
  font-size: 0.9rem;
`;

export const ProgressBarContainer = styled.div`
  display: grid;
  grid-template-columns: ${({gridTemCol}) => gridTemCol ? gridTemCol : "repeat(5, 1fr)"};
  height: 10px;
  border-radius: 0 0 4px 4px;
`;

export const ProgressBarItem = styled.div`
  background: ${({bagCol}) => bagCol ? bagCol : "none"};

  ${({first}) => first && css`
    border-radius: 0 0 0 4px;
  `}
  
  ${({last}) => last && css`
    border-radius: 0 0 4px 0;
  `}
`;