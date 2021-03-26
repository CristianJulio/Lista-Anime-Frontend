import React, { useContext } from "react";
import Buscador from "./Buscador";
import Navbar from "./Navbar";
import {
  StyledHeader,
  HeaderContainer,
  HeaderEnlace,
  Title,
  ButtonsContainer,
} from "../../styles/header/HeaderStyledComp";
import authContext from "../../context/auth/authContext";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  const { isAuthenticated } = useContext(authContext);

  return (
    <StyledHeader>
      <HeaderContainer>
        <Title>
          <HeaderEnlace to="/">AnimeList</HeaderEnlace>
        </Title>
        {isAuthenticated ? (
          <>
            <Navbar />
            <ButtonsContainer>
              <Buscador />
              <DropdownMenu />
            </ButtonsContainer>
          </>
        ) : null}
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
