import React, { useContext, useEffect } from "react";
import BrowserFilter from "./BrowserFilter";
import AnimeList from "../general/AnimeList";
import Pagination from "../general/Pagination";
import {
  StyledBrowser,
} from "../../styles/broswer/browserStyledComp";
import animeContext from "../../context/anime/animeContext";
import Spinner from "../general/Spinner";
import { useParams } from "react-router";

const Browser = () => {
  const {
    isFinished,
    browsedAnimes,
    getBrowsedAnimes,
    cleanBrowsedAnimes,
  } = useContext(animeContext);
  const { page } = useParams();

  useEffect(() => {
    getBrowsedAnimes({ q: "no game no life", page });

    return () => cleanBrowsedAnimes();

    // eslint-disable-next-line
  }, [page]);

  return (
    <StyledBrowser>
      <BrowserFilter />
      {isFinished ? (
        <>
          <AnimeList animes={browsedAnimes} />
          {browsedAnimes ? <Pagination baseUrl="/browse/" /> : null}
        </>
      ) : (
        <Spinner />
      )}
    </StyledBrowser>
  );
};

export default Browser;
