import React from "react";
import {
  AnimeListContainer,
  AnimeListTitle,
  TitlesContainer,
  Title,
  ListContainer,
  ListItem,
  ListLink,
  ListImg,
  ListTitle,
  ListContet
} from "../../styles/profile/profile.styles";

const ListSection = ({ title, animeList }) => {

  if(animeList.length === 0) return null;

  return (
    <>
      <AnimeListTitle>{title}</AnimeListTitle>
      <AnimeListContainer>
        <TitlesContainer>
          <Title texAli={"left"}>Title</Title>
          <Title texAli={"center"}>Score</Title>
          <Title texAli={"center"}>Progress</Title>
          <Title texAli={"center"}>Type</Title>
        </TitlesContainer>
        <ListContainer>
          {animeList.map((item) => (
            
              <ListItem key={item.animeId}>
                <ListLink to={`/anime/${item.mal_id}/${item.title.replace("%", "")}`}>
                  <ListImg src={item.image_url} />
                  <ListTitle>{item.title}</ListTitle>
                </ListLink>
                <ListContet>{item.score}</ListContet>
                <ListContet>{item.progress}/{item.episodes}</ListContet>
                <ListContet>{item.type}</ListContet>
              </ListItem>
          ))}
        </ListContainer>
      </AnimeListContainer>
    </>
  );
};

export default ListSection;
