import React, { useState, useContext, useEffect } from "react";
import { generateYears } from "../../years";
import AnimeContext from "../../context/anime/animeContext";
import { StyledAnimeFilter, SelectFilter, ButtonFilter } from '../../styles/temporadas/TemporadasFilterStyledComp';

const AnimeFilter = () => {
  const options = generateYears(); // Esta función sirve para generar los options del select de años

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
    <StyledAnimeFilter onSubmit={handleSubmit}>
      <SelectFilter
        name="season"
        id="season"
        value={season}
        onChange={handleChange}
      >
        <option value="winter">Winter</option>
        <option value="spring">Spring</option>
        <option value="summer">Summer</option>
        <option value="fall">Fall</option>
      </SelectFilter>

      <SelectFilter 
        name="year" 
        id="year" 
        value={year} 
        onChange={handleChange}
      >
        {options}
      </SelectFilter>

      <ButtonFilter disabled={!isFinished}>Go</ButtonFilter>
    </StyledAnimeFilter>
  );
};

export default AnimeFilter;
