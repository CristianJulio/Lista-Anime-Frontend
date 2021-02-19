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

    select, button {
      border: 1px solid #113661;
      cursor: pointer;
      font-size: 11pt;
    }

    select {
      appearance: none;
      border-radius: 12px;
      font-size: 11pt;
      margin-right: 25px;
      padding: 5px 0;
      text-align: center;
      width: 150px;
      transition: all .3s;
      box-shadow: 15px 15px 15px #ECECEC;

      &:hover {
      box-shadow: none;
      }
    }

    button {
      background: #113661;
      border-radius: 15px;
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

  div.search {
    display: flex;
    justify-content: center;
    margin-top: 25px;

    input {
      width: 700px;
      padding: 10px 20px;
      border-radius: 15px;
      border: 2px solid #ECECEC;
    }
  }
`;

const AnimeFilter = () => {
  const options = generateYears();

  const [params, setParams] = useState({
    season: "winter",
    year: "2021",
  });

  const [busqueda, setBusqueda] = useState("");

  const { isFinished, obtenerAnimes, searchAnime } = useContext(AnimeContext);

  useEffect(() => {
    obtenerAnimes(params);
    // eslint-disable-next-line
  }, []);

  const { season, year } = params;

  const handleChange = (e) => {
    setParams((params) => ({
      ...params,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    obtenerAnimes(params);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if(busqueda.length >= 3) 
      searchAnime(busqueda.toLowerCase());
    else
      alert("La búsqueda debe ser mínimo de 3 caracteres");
  }

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

      <div className="search">
        <input type="text" name="search" onChange={(e) => setBusqueda(e.target.value)} />
        <button onClick={handleSearch}>Enviar</button>
      </div>
    </AnimeFilterStyled>
  );
};

export default AnimeFilter;
