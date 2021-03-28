import styled, { css } from 'styled-components';
import { Container, middleTitle } from '../../globalStyle';

export const SearchContainer = styled(Container)`
`;

export const TitleSearch = styled(middleTitle)`
  margin-bottom: 25px;
`;

export const ButtonContainer = styled.div`
  margin-bottom: 25px;
`;

export const ButtonSearch = styled.button`
  width: 100px;
  padding: 8px 0;
  border-radius: 4px;
  border: none;
  background: #2b2d42;
  color: #FFF;
  margin-right: 10px;
  /* border-bottom: 3px solid #FFF; */

  cursor: pointer; 
  ${({active}) => active && css`
    border-bottom: 2px solid #72c178;
  `}  
`;