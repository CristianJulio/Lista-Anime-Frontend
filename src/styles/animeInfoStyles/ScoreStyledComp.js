import styled from 'styled-components';
import { NormalTitle } from '../../globalStyle';

export const TitleScore = styled(NormalTitle)`
  margin-bottom: 10px;
`;

export const ScoreContainer = styled.div`
  background: #FFF;
  height: 100px;
  display: flex;
  justify-content: space-around;
  border-radius: 4px;
  padding: 5px 10px;
`;

export const Item = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  align-items: center;
  max-height: 100%;
`;

export const BarItem = styled.span`
  display: block;
  width: 15px;
  max-height: 65%;
  min-height: 15px;
  height: ${({hgt}) => hgt ? hgt : "50px"};
  border-radius: 8px;
  background: rgb(104,214,57);
`;

export const ItemText = styled.p`
  color: #fff;
  font-size: ${({fonSiz}) => fonSiz ? fonSiz : "0.8rem"};
  transition: all .3s;

  ${ScoreContainer}:hover & {
    color: ${({col}) => col ? col : "#000"};
  }
`;