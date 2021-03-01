import styled from 'styled-components';
import { Container } from '../globalStyle';

export const StyledAnimeList = styled(Container)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 25px;
`;