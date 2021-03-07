import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html {
    background: rgb(237,241,245);
    font-family: 'Roboto', sans-serif;
  }
`;

export const Container = styled.div`
  width: 1200px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Enlace = styled(Link)`
  text-decoration: none;
`;

export const NormalTitle = styled.h2`
  font-weight: 500;
  font-size: 0.9rem;
  color: rgb(92,114,138);
`;

export const middleTitle = styled.h2`
  color: rgb(81,97,112);
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: .03rem;
`;

export default GlobalStyle;