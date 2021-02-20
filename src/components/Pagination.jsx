import React, { useContext, useState, useEffect } from 'react';
import animeContext from '../context/anime/animeContext';
import Styled from '@emotion/styled';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Link, useParams, useHistory } from 'react-router-dom';
import { generatePagination } from '../years';

const PaginationStyled = Styled.div`
  width: 600px;
  margin: 25px auto;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: #000;
      text-decoration: none;
    }

    li {
      box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
      margin-right: 10px;
      text-align: center;
      padding: 10px 15px;
      border: 1px solid #ECECEC;
      border-radius: 4px;
    }

    button {
      margin-right: 10px;
      padding: 12px 15px;
      box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
      border: 1px solid #ECECEC;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      &:disabled {
        box-shadow: none;
        cursor: default;
      }
    }
  }
`;

const Pagination = () => {
  const { lastPage } = useContext(animeContext);
  const { nombreAnime, page } = useParams();
  const pages = generatePagination(Number(page), Number(lastPage));
  const history = useHistory();

  const previousPage = () => {
    history.push(`/search/${nombreAnime}/${Number(page) - 1}`)
  }

  const nextPage = () => {
    history.push(`/search/${nombreAnime}/${Number(page) + 1}`)
  }

  return (
    <PaginationStyled>
      <ul>
        <button onClick={previousPage} disabled={Number(page) <= 1}><FaArrowLeft /></button>
        {pages.map(p => <Link key={p.id} to={`/search/${nombreAnime}/${p.id}`}>{p.li}</Link>)}
        <button onClick={nextPage} disabled={Number(page >= lastPage)}><FaArrowRight /></button>
      </ul>
    </PaginationStyled>
  );
}

export default Pagination;