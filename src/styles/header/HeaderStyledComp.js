import styled, { css } from 'styled-components';
import { Container, Enlace } from '../../globalStyle';

export const StyledHeader = styled.header`
  background: #2b2d42;
  padding: 15px 30px;
  margin-bottom: 50px;
  transition: all .2s;
  
  ${({opacity}) => opacity && css`
    opacity: .5;

    &:hover {
        opacity: .9;
    }
  `}
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
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

export const ButtonsContainer = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;