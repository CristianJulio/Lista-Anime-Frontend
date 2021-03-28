import React from "react";
import {
  InfoContainer,
  TitleInfo,
  ImgContainer,
  InfoImg,
  InfoProgress,
  EnlaceInfo,
} from "../../styles/homepage/homepage.styles";

const Current = ({ userAnimeList }) => {
  return (
    <div>
      <TitleInfo>Currently Watching</TitleInfo>
      <InfoContainer>
        {userAnimeList ? (
          <>
            {userAnimeList.watching ? (
              <ImgContainer>
                {userAnimeList.watching.map((item, index) => {
                  if (index >= 4) return null;
                  return (
                    <EnlaceInfo
                      to={`/anime/${item.mal_id}/${item.title
                        .split(" ")
                        .join("-")
                        .replace("%", "")}`}
                    >
                      <InfoImg key={item.title} src={item.image_url} alt="" />
                      <InfoProgress>{`${item.progress}/${item.episodes}`}</InfoProgress>
                    </EnlaceInfo>
                  );
                })}
              </ImgContainer>
            ) : null}
          </>
        ) : null}
      </InfoContainer>
    </div>
  );
};

export default Current;
