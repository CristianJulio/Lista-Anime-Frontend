import styled from 'styled-components';
import { Container, Enlace, middleTitle } from '../../globalStyle';

export const StyledAnimeCarrusel = styled(Container)`
  margin-bottom: 25px;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  @media screen and (min-width: 1200px) {
    width: 60%;
  }

  @media screen and (min-width: 1920px) {
    width: 66.5%;
  }
`;

export const TitleCarrusel = styled(middleTitle)`
`;

export const EnlaceCarrusel = styled(Enlace)`
  color: rgb(81,97,112);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: .03rem;
  margin-right: 35px;
`;