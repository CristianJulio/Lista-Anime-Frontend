import styled from 'styled-components';
import { Container } from '../../globalStyle';

export const StyledAnimeList = styled(Container)`
  display: grid;
  
  grid-gap: 25px;

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 1920px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const Text = styled.p`
  font-size: 1.5rem;
  color: rgb(100,115,128);
  font-weight: 400;
  text-align: center;
`;