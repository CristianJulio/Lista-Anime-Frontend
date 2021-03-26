import styled from 'styled-components';
import { NormalTitle } from '../../globalStyle';

export const CharactersContainer = styled.div`
  margin-bottom: 25px;
`;

export const TitleCharacters = styled(NormalTitle)`
  margin-bottom: 10px;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-gap: 10px 25px;

  @media screen and (min-width: 1200px) {
    width: 950px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1920px) {
    width: 1150px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const InnerItemContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: ${({JusCon}) => JusCon ? JusCon : "flex-start"};
`;

export const ItemCharacter = styled.div`
  background: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgItem = styled.img`
  width: 60px;
  height: 80px;
  object-fit: cover;
  border-radius: ${({borRad}) => borRad ? borRad : "4px 0 0 4px"};
`;

export const TextContainerItem = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  padding: 10px;
  text-align: ${({texAli}) => texAli ? texAli : "left"};
`;

export const TitleTexCon = styled.span`
  color: rgb(92,114,138);
  font-weight: 400;
  font-size: 0.8rem;
`;

export const ContentTexCon = styled.span`
  color: rgb(146,153,161);
  font-weight: 300;
  font-size: 0.75rem;
`;