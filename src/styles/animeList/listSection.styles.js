import styled from 'styled-components';
import {  middleTitle, NormalTitle, Enlace } from '../../globalStyle';

export const AnimeListContainer = styled.div`
  box-shadow: 3px 3px 3px rgba(0, 0, 0, .1);
  background: #FFF;
  padding: 8px 15px;
  border-radius: 4px;
  margin-bottom: 50px;
`;

export const TitlesContainer = styled.div`
  display: grid;
  grid-template-columns: 75% 5% 5% 5%;
  grid-gap: 25px;
  padding: 15px 0;
`;

export const AnimeListTitle = styled(middleTitle)`
  margin: 0 0 15px 0;
`;

export const Title = styled(NormalTitle)`
  font-weight: 700;
  text-align: ${({texAli}) => texAli};
`;

export const ListContainer = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  margin: 15px 0;
  display: grid;
  grid-template-columns: 75% 5% 5% 5%;
  grid-gap: 25px;
`;

export const ListLink = styled(Enlace)`
  display: flex;
  align-items: center;
`;

export const ListImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 15px;
`;

export const ListTitle = styled(NormalTitle)`

`;

export const ListContet = styled(NormalTitle)`
  text-align: center;
  padding-top: 15px;
`;