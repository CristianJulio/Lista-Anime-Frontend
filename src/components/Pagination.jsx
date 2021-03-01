import React, { useContext } from "react";
import animeContext from "../context/anime/animeContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useParams, useHistory } from "react-router-dom";
import { generatePagination } from "../years";
import {
  StyledPagination,
  UlPagination,
  ButtonPagination,
  EnlacePagination,
  LiPagination
} from "../styles/PaginationStyledComp";

const Pagination = () => {
  const { lastPage } = useContext(animeContext);
  const { nombreAnime, page } = useParams();
  const pages = generatePagination(Number(page), Number(lastPage));
  const history = useHistory();

  const previousPage = () => {
    history.push(`/search/${nombreAnime}/${Number(page) - 1}`);
  };

  const nextPage = () => {
    history.push(`/search/${nombreAnime}/${Number(page) + 1}`);
  };

  return (
    <StyledPagination>
      <UlPagination>
        <ButtonPagination onClick={previousPage} disabled={Number(page) <= 1}>
          <FaArrowLeft />
        </ButtonPagination>
        {pages.map((p) => (
          <EnlacePagination key={p} to={`/search/${nombreAnime}/${p}`}>
            {<LiPagination>{p}</LiPagination>}
          </EnlacePagination>
        ))}
        <ButtonPagination
          onClick={nextPage}
          disabled={Number(page >= lastPage)}
        >
          <FaArrowRight />
        </ButtonPagination>
      </UlPagination>
    </StyledPagination>
  );
};

export default Pagination;
