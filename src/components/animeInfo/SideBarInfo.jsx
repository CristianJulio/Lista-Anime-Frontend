import React, { useContext } from "react";
import animeContext from "../../context/anime/animeContext";
import {
  StyledSideBar,
  InfoSetSidebar,
  TitleInfoSet,
  InfoSetContent,
  InfoSetSecondContent,
} from "../../styles/animeInfoStyles/SideBarStyledComp";

const SideBarInfo = () => {
  const { currentAnime } = useContext(animeContext);

  return (
    <StyledSideBar>
      <InfoSetSidebar>
        <TitleInfoSet>Type</TitleInfoSet>
        <InfoSetContent>{currentAnime.type}</InfoSetContent>
      </InfoSetSidebar>
      <InfoSetSidebar>
        <TitleInfoSet>Broadcast</TitleInfoSet>
        <InfoSetContent>{currentAnime.broadcast}</InfoSetContent>
      </InfoSetSidebar>
      <InfoSetSidebar>
        <TitleInfoSet>Source</TitleInfoSet>
        <InfoSetContent>{currentAnime.source}</InfoSetContent>
      </InfoSetSidebar>
      <InfoSetSidebar>
        <TitleInfoSet>Score</TitleInfoSet>
        <InfoSetContent>{currentAnime.score}</InfoSetContent>
      </InfoSetSidebar>
      <InfoSetSidebar>
        <TitleInfoSet>Rating</TitleInfoSet>
        <InfoSetContent>{currentAnime.rating}</InfoSetContent>
      </InfoSetSidebar>
      <InfoSetSidebar>
        <TitleInfoSet>Episodes</TitleInfoSet>
        <InfoSetContent>{currentAnime.episodes}</InfoSetContent>
      </InfoSetSidebar>
      <InfoSetSidebar>
        <TitleInfoSet>Duration</TitleInfoSet>
        <InfoSetContent>{currentAnime.duration}</InfoSetContent>
      </InfoSetSidebar>
      <InfoSetSidebar>
        <TitleInfoSet>Status</TitleInfoSet>
        <InfoSetContent>{currentAnime.status}</InfoSetContent>
      </InfoSetSidebar>
      <InfoSetSidebar>
        <TitleInfoSet>Japanse Title</TitleInfoSet>
        <InfoSetContent>{currentAnime.title_japanese}</InfoSetContent>
      </InfoSetSidebar>
      <InfoSetSidebar>
        <TitleInfoSet>Genres</TitleInfoSet>
        {currentAnime.genres ? (
          <InfoSetContent>
            {currentAnime.genres.map((g) => (
              <InfoSetSecondContent key={g.name}>{g.name}</InfoSetSecondContent>
            ))}
          </InfoSetContent>
        ) : (
          "Unknown"
        )}
      </InfoSetSidebar>
      <InfoSetSidebar>
        <TitleInfoSet>Producers</TitleInfoSet>
        <InfoSetContent>
          {currentAnime.producers
            ? currentAnime.producers.map((p) => (
                <InfoSetSecondContent key={p.name}>
                  {p.name}
                </InfoSetSecondContent>
              ))
            : null}
        </InfoSetContent>
      </InfoSetSidebar>
      {currentAnime.aired ? (
        <>
          <InfoSetSidebar>
            <TitleInfoSet>Start Date</TitleInfoSet>
            <InfoSetContent>
              {new Date(currentAnime.aired.from).toLocaleDateString()}
            </InfoSetContent>
          </InfoSetSidebar>
          <InfoSetSidebar>
            <TitleInfoSet>End Date</TitleInfoSet>
            <InfoSetContent>
              {currentAnime.aired.to
                ? new Date(currentAnime.aired.to).toLocaleDateString()
                : "Unknown"}
            </InfoSetContent>
          </InfoSetSidebar>
        </>
      ) : null}
    </StyledSideBar>
  );
};

export default SideBarInfo;
