import styled from 'styled-components';
import { Enlace } from '../../globalStyle';

export const NavContainer = styled.nav`
  /* display: flex;
  justify-content: space-between; */
`;

export const NavItem = styled(Enlace)`
  color: #e5e7ea;
  letter-spacing: .01rem;
  padding: 0 16px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: capitalize;
  font-family: Overpass,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  transition: all .2s;
  
  &:hover {
    color: #d3d5f3;
  }
`;