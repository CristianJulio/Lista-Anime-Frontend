import React, { useContext } from "react";
import animeContext from "../../context/anime/animeContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useParams, useHistory } from "react-router-dom";
import { generatePagination } from "../../years";
import {
  StyledPagination,
  UlPagination,
  ButtonPagination,
  EnlacePagination,
  LiPagination
} from "../../styles/general/PaginationStyledComp";

const Pagination = ({ baseUrl }) => {
  const { lastPage } = useContext(animeContext);
  const { page } = useParams();
  const pages = generatePagination(Number(page), Number(lastPage));
  const history = useHistory();

  const previousPage = () => {
    history.push(`${baseUrl}${Number(page) - 1}`);
  };

  const nextPage = () => {
    history.push(`${baseUrl}${Number(page) + 1}`);
  };

  return (
    <StyledPagination>
      <UlPagination>
        <ButtonPagination onClick={previousPage} disabled={Number(page) <= 1}>
          <FaArrowLeft />
        </ButtonPagination>
        {pages.length !== 0 ? (
          <>
            {pages.map((p) => (
              <EnlacePagination key={p} to={`${baseUrl}${p}`}>
                {<LiPagination>{p}</LiPagination>}
              </EnlacePagination>
            ))}
          </>
        ) :  <LiPagination to="">1</LiPagination>}
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
