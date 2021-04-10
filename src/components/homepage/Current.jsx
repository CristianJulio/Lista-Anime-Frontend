import React from "react";
import {
  InfoContainer,
  TitleInfo,
  ImgContainer,
  InfoImg,
  InfoProgress,
  EnlaceInfo,
} from "../../styles/homepage/homepage.styles";

const Current = ({ watchingPrev }) => {
  return (
    <div>
      <TitleInfo>Currently Watching</TitleInfo>
      <InfoContainer>
        <ImgContainer>
          {watchingPrev.map((wp) => (
            <EnlaceInfo
              key={wp.mal_id}
              to={`/anime/${wp.mal_id}/${wp.title
                .split(" ")
                .join("-")
                .replace("%", "")}`}
            >
              <InfoImg key={wp.title} src={wp.image_url} alt="" />
              <InfoProgress>{`${wp.progress}/${
                wp.episodes ? wp.episodes : ""
              }`}</InfoProgress>
            </EnlaceInfo>
          ))}
        </ImgContainer>
      </InfoContainer>
    </div>
  );
};

export default Current;
