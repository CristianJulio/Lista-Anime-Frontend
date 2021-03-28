import React, { useContext } from "react";
import {
  ListsContainer
} from "../../styles/animeList/animeList.styles";
import ListSection from "./ListSection";
import userContext from "../../context/users/usersContext";

const Lists = ({ search, newList }) => {
  const {
    userAnimeList,
  } = useContext(userContext);

  return (
    <ListsContainer>
      {userAnimeList.watching ? (
        <ListSection
          title="Watching"
          animeList={search ? newList.watching : userAnimeList.watching}
        />
      ) : null}

      {userAnimeList.plan_to_watch ? (
        <ListSection
          title="Planning"
          animeList={search ? newList.planning : userAnimeList.plan_to_watch}
        />
      ) : null}

      {userAnimeList.completed ? (
        <ListSection
          title="Completed"
          animeList={search ? newList.completed : userAnimeList.completed}
        />
      ) : null}

      {userAnimeList.paused ? (
        <ListSection
          title="Paused"
          animeList={search ? newList.paused : userAnimeList.paused}
        />
      ) : null}

      {userAnimeList.dropped ? (
        <ListSection
          title="Dropped"
          animeList={search ? newList.dropped : userAnimeList.dropped}
        />
      ) : null}

      {userAnimeList.rewatching ? (
        <ListSection
          title="Rewatching"
          animeList={search ? newList.rewatching : userAnimeList.rewatching}
        />
      ) : null}
    </ListsContainer>
  );
};

export default Lists;
