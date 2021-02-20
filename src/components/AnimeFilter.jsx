import React, { useState, useContext, useEffect } from "react";
import Styled from "@emotion/styled";
import { generateYears } from "../years";
import AnimeContext from "../context/anime/animeContext";

const AnimeFilterStyled = Styled.form`
  div.season-filter {
    align-itemes: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 50px;

    select, button {
      cursor: pointer;
      font-size: 11pt;
    }

    select {
      appearance: none;
      border-radius: 6px;
      font-size: 11pt;
      margin-right: 25px;
      padding: 5px 16px;
      color: #8f9eac;
      border: 1px solid #f7f7f7;
      width: 150px;
      box-shadow: 0 0 5px rgba(0,0,0,.1);
      transition: all .3s;
      box-shadow: 15px 15px 15px #ECECEC;

      &:hover {
      box-shadow: none;
      }
    }

    button {
      background: #2b2d42;
      border: 1px solid #2b2d42;
      border-radius: 6px;
      color: #FFF;
      width: 100px;
      transition: all .3s;

      &:hover {
        transform: scale(1.1);
      }

      &:disabled {
        background: #ECECEC;
        color: #929292;
        border: 1px solid #929292;
        cursor: default;
        transform: scale(1);
      }
    }
  }
`;

const AnimeFilter = () => {
  const options = generateYears();

  const [params, setParams] = useState({
    season: "winter",
    year: "2021",
  });

  const { season, year } = params;

  const { isFinished, getAnimes, cleanGetAnimes } = useContext(AnimeContext);

  useEffect(() => {
    getAnimes(params);

    return (() => cleanGetAnimes())
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setParams((params) => ({
      ...params,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getAnimes(params);
  };

  return (
    <AnimeFilterStyled onSubmit={handleSubmit}>
      <div className="season-filter">
        <select
          name="season"
          id="season"
          value={season}
          onChange={handleChange}
        >
          <option value="winter">Invierno</option>
          <option value="spring">Primavera</option>
          <option value="summer">Verano</option>
          <option value="fall">Otoño</option>
        </select>

        <select name="year" id="year" value={year} onChange={handleChange}>
          {options}
        </select>

        <button disabled={!isFinished}>Buscar</button>
      </div>
    </AnimeFilterStyled>
  );
};

export default AnimeFilter;
