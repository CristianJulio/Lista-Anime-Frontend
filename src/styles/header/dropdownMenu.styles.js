import styled from 'styled-components';

export const MenuImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
`;

export const SubMenu = styled.ul`
  display: none;
  position: absolute;
  /* padding: 25px 70px 25px 25px; */
  background: #FFF;
  box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, .1);
  list-style: none;
  border-radius: 4px;

  @media screen and (min-width: 1200px) {
    right: 15px;
  }

  @media screen and (min-width: 1920px) {
    right: 195px;
  }
`;

export const ItemSubMenu = styled.li`
  background: ${({bg}) => bg ? bg : "#fff"};
  padding: ${({pad}) => pad ? pad : "0 0 0 0"};
  border-radius: ${({borRad}) => borRad ? borRad : "0 0 0 0"};
  font-size: 20px;
  color: rgb(92,114,138);
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ItemName = styled.span`
  margin-left: 10px;
  font-size: 12px;
`;

export const MenuContainer = styled.div`
  &:hover {
    ${SubMenu} {
      display: block;
    }
  }
`;