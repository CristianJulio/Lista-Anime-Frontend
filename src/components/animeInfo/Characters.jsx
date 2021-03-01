import React from "react";
import {
  CharactersContainer,
  TitleCharacters,
  ItemsContainer,
  InnerItemContainer,
  ItemCharacter,
  ImgItem,
  TextContainerItem,
  TitleTexCon,
  ContentTexCon
} from "../../styles/animeInfoStyles/CharactersStyledComp";

const Characters = ({ data }) => {

  return (
    <CharactersContainer>
      <TitleCharacters>Characters</TitleCharacters>

      <ItemsContainer>
        {data.map((d) => (
          <ItemCharacter key={d.id}>
            <InnerItemContainer>
              <ImgItem src={d.chara.image_url} alt="" />
              <TextContainerItem>
                <TitleTexCon>{d.chara.name}</TitleTexCon>
                <ContentTexCon>{d.chara.role}</ContentTexCon>
              </TextContainerItem>
            </InnerItemContainer>

            {d.chara.voice_actors.length !== 0 ? (
              <InnerItemContainer JusCon="flex-end">
                <TextContainerItem texAli="right">
                  <TitleTexCon>{d.chara.voice_actors[0].name}</TitleTexCon>
                  <ContentTexCon>{d.chara.voice_actors[0].language}</ContentTexCon>
                </TextContainerItem>
                <ImgItem src={d.chara.voice_actors[0].image_url} alt="" borRad="0 4px 4px 0" />
              </InnerItemContainer>
            ) : (
              <InnerItemContainer JusCon="flex-end">
                <TextContainerItem texAli="right">
                  <TitleTexCon>Unknown</TitleTexCon>
                  <ContentTexCon>Voice Actor</ContentTexCon>
                </TextContainerItem>
                <ImgItem src="https://cdn.myanimelist.net/r/42x62/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c" alt="" borRad="0 4px 4px 0" />
              </InnerItemContainer>
            )}            
          </ItemCharacter>
        ))}
      </ItemsContainer>
    </CharactersContainer>
  );
};

export default Characters;
