import styled from 'styled-components';
import { Container } from '../../globalStyle';

export const StyledAnimeList = styled(Container)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 25px;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  color: rgb(100,115,128);
  font-weight: 400;
  text-align: center;
`;