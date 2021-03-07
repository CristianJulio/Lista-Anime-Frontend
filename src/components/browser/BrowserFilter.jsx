import React, { useContext, useState } from 'react';
import { SelectBrowser, StyledBrowserFilter, InputBrowser, ButtonBrowser } from '../../styles/broswer/browserFilterStyledComp';
import { getGenres } from '../../years';
import animeContext from '../../context/anime/animeContext';
import { useParams } from 'react-router';

const BrowserFilter = () => {
  const { page } = useParams();
  const { getBrowsedAnimes } = useContext(animeContext);
  const genres = getGenres();
  const [params, setParams] = useState({
    q: "",
    type: "",
    status: "",
    rated: "",
    genre: "",
    score: "",
    order: "",
    sort: ""
  });
  const { q, type, status, rated, genre, score, order, sort } = params;

  const handleChange = e => {
    setParams(params => ({ ...params, [e.target.name]: e.target.value }));
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(q === "") return alert("El campo de busqueda no puede quedar vacío");

    getBrowsedAnimes({...params, page})
  }
  
  return (
    <StyledBrowserFilter onSubmit={handleSubmit}>
      <InputBrowser type="text" name="q" onChange={handleChange} value={q} placeholder="Naruto..." />
      
      <SelectBrowser name="type" value={type} onChange={handleChange}>
        <option value="">Type</option>
        <option value="tv">Tv</option>
        <option value="ova">Ova</option>
        <option value="movie">Movie</option>
        <option value="special">Special</option>
      </SelectBrowser>

      <SelectBrowser name="status" value={status} onChange={handleChange}>
        <option value="">Status</option>
        <option value="airing">Airing</option>
        <option value="completed">Completed</option>
        <option value="tba">To be Aired</option>
        <option value="upcoming">Upcoming</option>
      </SelectBrowser>

      <SelectBrowser name="rated" value={rated} onChange={handleChange}>
      <option value="">Rated</option>
        <option value="g">G</option>
        <option value="pg">PG</option>
        <option value="pg13">PG-13</option>
        <option value="r17">R-17+</option>
        <option value="r">R+</option>
        <option value="rx">Rx</option>
      </SelectBrowser>

      <SelectBrowser name="genre" value={genre} onChange={handleChange}>
        <option value="">Genre</option>
        {genres.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
      </SelectBrowser>

      <SelectBrowser name="score" value={score} onChange={handleChange}>
        <option value="">Score</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </SelectBrowser>

      <SelectBrowser name="order" value={order} onChange={handleChange}>
        <option value="">Order By</option>
        <option value="title">Title</option>
        <option value="type">Type</option>
        <option value="sta_dat">Start Date</option>
        <option value="end_dat">End Date</option>
        <option value="score">Score</option>
        <option value="members">Members</option>
        <option value="episodes">Episodes</option>
        <option value="raiting">Raiting</option>
      </SelectBrowser>

      <SelectBrowser name="sort" value={sort} onChange={handleChange}>
        <option value="">Sort</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </SelectBrowser>

      <ButtonBrowser>Go</ButtonBrowser>
    </StyledBrowserFilter>
  );
}

export default BrowserFilter;