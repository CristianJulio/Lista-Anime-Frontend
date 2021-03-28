import React, { useContext, useEffect, useState } from "react";
import Header from "../header/Header";
import Spinner from "../general/Spinner";
import userContext from "../../context/users/usersContext";
import { useParams } from "react-router";
import {
  ProfileContainer,
  InputFilter,
  InputContainer,
  CleanButton,
  EmptyMessage
} from "../../styles/profile/profile.styles";
import ListSection from "./ListSection";
import { AiFillCloseCircle } from "react-icons/ai";

const Profile = () => {
  const {
    userAnimeList,
    isFinished,
    getUserAnimeList,
    cleanUserAnimeList,
  } = useContext(userContext);

  const [search, setSearch] = useState("");

  const [newList, setNewList] = useState({
    watching: [],
    planning: [],
    completed: [],
    paused: [],
    dropped: [],
    rewatching: [],
  });

  const { username } = useParams();

  useEffect(() => {
    getUserAnimeList(username);
    return () => cleanUserAnimeList();
    // eslint-disable-next-line
  }, [username]);

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

  let empty = true;

  for(let item in userAnimeList) {
    if(userAnimeList[item].length !== 0) {
      empty = false;
    }
  }

  return (
    <>
      <Header />
      <>
        {empty && isFinished ? (
          <EmptyMessage>Nothing to show yet...</EmptyMessage>
        ) : (
          <ProfileContainer>
          {isFinished ? (
            <>
              <InputContainer>
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
              </InputContainer>
              {userAnimeList.watching ? (
                <ListSection
                  title="Watching"
                  animeList={search ? newList.watching : userAnimeList.watching}
                />
              ) : null}

              {userAnimeList.plan_to_watch ? (
                <ListSection
                  title="Planning"
                  animeList={
                    search ? newList.planning : userAnimeList.plan_to_watch
                  }
                />
              ) : null}

              {userAnimeList.completed ? (
                <ListSection
                  title="Completed"
                  animeList={
                    search ? newList.completed : userAnimeList.completed
                  }
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
                  animeList={
                    search ? newList.rewatching : userAnimeList.rewatching
                  }
                />
              ) : null}
            </>
          ) : (
            <Spinner />
          )}
        </ProfileContainer>
        )}
      </>
    </>
  );
};

export default Profile;
