import styled from 'styled-components';
import { Enlace } from '../globalStyle';

export const StyledHeader = styled.header`
  background: #2b2d42;
  padding: 15px 30px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.h1`
  color: #FFF;
  text-align: center;
  font-family: 'Lobster', cursive;
  transform: rotateZ(-5deg);
  cursor: pointer;
  transition: all .3s;

  &:hover {
    transform: rotateZ(0deg);
  }
`;

export const HeaderEnlace = styled(Enlace)`
  color: #FFF;
`;