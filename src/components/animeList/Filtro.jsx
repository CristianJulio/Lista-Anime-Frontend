import React, { useContext } from "react";
import {
  InputFilter,
  InputContainer,
  CleanButton,
  FullInput,
  TitleFiltro
} from "../../styles/animeList/Filtro";
import userContext from "../../context/users/usersContext";
import { AiFillCloseCircle } from "react-icons/ai";

const Filtro = ({ search, setSearch, setNewList }) => {
  const { userAnimeList } = useContext(userContext);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyUp = (e) => {
    const watching = userAnimeList.watching.filter(
      (item) => item.title.toLowerCase().includes(search.toLowerCase()) === true
    );
    const planning = userAnimeList.plan_to_watch.filter(
      (item) => item.title.toLowerCase().includes(search.toLowerCase()) === true
    );
    const completed = userAnimeList.completed.filter(
      (item) => item.title.toLowerCase().includes(search.toLowerCase()) === true
    );
    const paused = userAnimeList.paused.filter(
      (item) => item.title.toLowerCase().includes(search.toLowerCase()) === true
    );
    const dropped = userAnimeList.dropped.filter(
      (item) => item.title.toLowerCase().includes(search.toLowerCase()) === true
    );
    const rewatching = userAnimeList.rewatching.filter(
      (item) => item.title.toLowerCase().includes(search.toLowerCase()) === true
    );

    setNewList({
      watching,
      planning,
      completed,
      paused,
      dropped,
      rewatching,
    });
  };

  return (
    <InputContainer>
      <TitleFiltro>Filter</TitleFiltro>
      <FullInput>
        <InputFilter
          type="text"
          value={search}
          placeholder="Filter..."
          onChange={handleChange}
          onKeyUp={handleKeyUp}
        />
        {search ? (
          <CleanButton onClick={() => setSearch("")}>
            <AiFillCloseCircle />
          </CleanButton>
        ) : null}
      </FullInput>
    </InputContainer>
  );
};

export default Filtro;
