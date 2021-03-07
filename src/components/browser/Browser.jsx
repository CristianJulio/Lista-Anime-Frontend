import React, { useContext, useEffect } from 'react';
import Header from '../header/Header';
import BrowserFilter from './BrowserFilter';
import AnimeList from '../general/AnimeList';
import Pagination from '../general/Pagination';
import { StyledBrowser, TitleBrowser } from '../../styles/broswer/browserStyledComp';
import animeContext from '../../context/anime/animeContext';
import Spinner from '../general/Spinner';
import { useParams } from 'react-router';


const Browser = () => {
  const { isFinished, browsedAnimes, getBrowsedAnimes, cleanBrowsedAnimes } = useContext(animeContext);
  const { page } = useParams();

  useEffect(() => {
    getBrowsedAnimes({q: "naruto", page});

    return (() => cleanBrowsedAnimes());
    
  // eslint-disable-next-line
  }, [page]);
  
  return (
    <>
      <Header />
      
      <StyledBrowser>
        <TitleBrowser>Browse</TitleBrowser>
        <BrowserFilter />
        {isFinished ? (
          <>
            <AnimeList animes={browsedAnimes} />
            {browsedAnimes ? <Pagination baseUrl="/browse/" /> : null}
          </>
        ) : <Spinner />}
      </StyledBrowser>
    </>
  );
}
 
export default Browser;