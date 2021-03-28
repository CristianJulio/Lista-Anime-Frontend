import styled from 'styled-components';
import { Container, middleTitle, NormalTitle, Enlace } from '../../globalStyle';

export const HomePageContainer = styled(Container)`
  display: grid;
  margin-bottom: 25px;

  @media screen and (min-width: 1200px) {
    grid-template-columns: 60% 40%;
  }

  @media screen and (min-width: 1920px) {
    grid-template-columns: 64.5% 34%;
    grid-gap: 25px;
  }
`;

export const AnimesContainer = styled.div`
  
`;

export const InfoContainer = styled.div`
  background: #FFF;
  padding: 20px;
  border-radius: 4px;
  height: 185px;
`;

export const TitleInfo = styled(middleTitle)`
  margin-bottom: 10px;
`;

export const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

export const InfoImg = styled.img`
  width: 100px;
  height: 130px;
  object-fit: cover;
  border-radius: 4px;
`;

export const InfoProgress = styled(NormalTitle)`
  text-align: center;
  margin-top: 5px;
`;

export const EnlaceInfo = styled(Enlace)`

`;