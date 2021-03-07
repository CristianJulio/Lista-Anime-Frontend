import styled from 'styled-components';
import { Enlace } from '../../globalStyle';

export const EnlaceAnimeCard = styled(Enlace)`
  width: 185px;
`;

export const ImgAnimeCard = styled.img`
  box-shadow: 0 0 5px rgba(0,0,0,.1);
  border-radius: 4px;
  height: 275px;
  width: 100%;
  object-fit: cover;
`;

export const TitleAnimeCard = styled.p`
  color: #808799;
  font-weight: 600;
  font-size: 1rem;
  line-height: 21px;
`;