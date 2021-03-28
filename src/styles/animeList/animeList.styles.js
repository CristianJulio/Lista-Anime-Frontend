import styled from 'styled-components';
import { Container, middleTitle } from '../../globalStyle';

export const AnimeListStyled = styled(Container)`
  margin-bottom: 25px;
  
  @media screen and (min-width: 1920px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const ListsContainer = styled.div`
  @media screen and (min-width: 1920px) {
    width: 83%;
  }
`;

export const EmptyMessage = styled(middleTitle)`
  text-align: center;
`;