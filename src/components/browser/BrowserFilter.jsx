import React, { useContext, useState } from 'react';
import { SelectBrowser, StyledBrowserFilter, InputBrowser, ButtonBrowser } from '../../styles/broswer/browserFilterStyledComp';
import { getGenres } from '../../years';
import animeContext from '../../context/anime/animeContext';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [error, setError] = useState(false);

  const handleChange = e => {
    setParams(params => ({ ...params, [e.target.name]: e.target.value }));
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(q === "" && type === "" && rated === "" && genre === "") {
      setError(true);
      return toast.warn("You must select at least one of the fields that are in red", { hideProgressBar: true });
    }

    if(q.length < 3 && type === "" && rated === "" && genre === "") {
      setError(false);
      return toast.warn("The search field must have a minimum of 3 characters", { hideProgressBar: true });
    }
  
    setError(false);
    getBrowsedAnimes({...params, page})
  }

  return (
    <StyledBrowserFilter onSubmit={handleSubmit}>
      <InputBrowser type="text" name="q" onChange={handleChange} value={q} placeholder="No game no..." />
      
      <SelectBrowser boxShaCol={error ? "#d65245" : "rgba(0,0,0,.1))"} name="type" value={type} onChange={handleChange}>
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

      <SelectBrowser boxShaCol={error ? "#d65245" : "rgba(0,0,0,.1))"} name="rated" value={rated} onChange={handleChange}>
      <option value="">Rated</option>
        <option value="g">G</option>
        <option value="pg">PG</option>
        <option value="pg13">PG-13</option>
        <option value="r17">R-17+</option>
        <option value="r">R+</option>
        <option value="rx">Rx</option>
      </SelectBrowser>

      <SelectBrowser boxShaCol={error ? "#d65245" : "rgba(0,0,0,.1))"} name="genre" value={genre} onChange={handleChange}>
        <option value="">Genre</option>
        {genres.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
      </SelectBrowser>

      <SelectBrowser name="score" value={score} onChange={handleChange}>
        <option value="">Score</option>
        <option value="1.0">1</option>
        <option value="2.0">2</option>
        <option value="3.0">3</option>
        <option value="4.0">4</option>
        <option value="5.0">5</option>
        <option value="6.0">6</option>
        <option value="7.0">7</option>
        <option value="8.0">8</option>
        <option value="9.0">9</option>
        <option value="10.0">10</option>
      </SelectBrowser>

      <SelectBrowser name="order" value={order} onChange={handleChange}>
        <option value="">Order By</option>
        <option value="title">Title</option>
        <option value="type">Type</option>
        <option value="start_date">Start Date</option>
        <option value="end_date">End Date</option>
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

      <ToastContainer
        position="top-left"
      />
    </StyledBrowserFilter>
  );
}

export default BrowserFilter;