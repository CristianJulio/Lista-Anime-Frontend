import React, { useState } from "react";
import Browser from "../browser/Browser";
import Header from "../header/Header";
import Temporadas from "../temporadas/Temporadas";
import {
  SearchContainer,
  TitleSearch,
  ButtonContainer,
  ButtonSearch,
} from "../../styles/Search/search.styles";

const Search = () => {
  const BROWSE = "Browse";
  const SEASON = "Seasonal";

  const [state, setState] = useState(BROWSE);

  return (
    <>
      <Header />
      <SearchContainer>
        <TitleSearch>
          Search animes ({state === BROWSE ? "Browse" : "Seasonal"})
        </TitleSearch>
        <ButtonContainer>
          <ButtonSearch active={state === BROWSE} onClick={() => setState(BROWSE)}>Browser</ButtonSearch>
          <ButtonSearch active={state === SEASON} onClick={() => setState(SEASON)}>Seasonal</ButtonSearch>
        </ButtonContainer>

        {state === BROWSE ? <Browser /> : null}
        {state === SEASON ? <Temporadas /> : null}
      </SearchContainer>
    </>
  );
};

export default Search;
