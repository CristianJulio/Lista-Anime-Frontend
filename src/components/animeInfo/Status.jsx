import React, { useState, useContext, useEffect } from "react";
import {
  TitleStats,
  StatusContainer,
  ItemContainer,
  Item,
  ItemTitle,
  ItemContent,
  ItemInnertext,
  ProgressBarContainer,
  ProgressBarItem,
} from "../../styles/animeInfoStyles/StatusStyledComp";
import animeContext from "../../context/anime/animeContext";

const Status = () => {
  const { currentAnime } = useContext(animeContext);
  const [isbigscreen, setIsBigScreen] = useState(false)

  const updateSize = () => {
    setIsBigScreen(window.innerWidth >= 1920);
  }

  useEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize);
  // eslint-disable-next-line
  }, []);

  const {
    total,
    watching,
    on_hold,
    plan_to_watch,
    dropped,
    completed,
  } = currentAnime;

  let wp = ((100 * watching) / total).toFixed(1);
  let ohp = ((100 * on_hold) / total).toFixed(1);
  let pwp = ((100 * plan_to_watch) / total).toFixed(1);
  let dp = ((100 * dropped) / total).toFixed(1);
  let comp = ((100 * completed) / total).toFixed(1);

  const gridTemCol = `${wp}% ${dp}% ${ohp}% ${pwp}% ${comp}%`;

  return (
    <div>
      <TitleStats>Status Distribution</TitleStats>

      <StatusContainer>
        <ItemContainer>
          <Item>
            <ItemTitle bagCol="rgb(104, 214, 57)">Current</ItemTitle>
            <ItemContent>
              <ItemInnertext col="rgb(104, 214, 57)">{watching}</ItemInnertext>{" "}
              Users
            </ItemContent>
          </Item>
          <Item>
            <ItemTitle bagCol="rgb(2, 169, 255)">Dropped</ItemTitle>
            <ItemContent>
              <ItemInnertext col="rgb(2, 169, 255)">{dropped}</ItemInnertext>{" "}
              Users
            </ItemContent>
          </Item>
          <Item>
            <ItemTitle bagCol="rgb(146, 86, 243)">Paused</ItemTitle>
            <ItemContent>
              <ItemInnertext col="rgb(146, 86, 243)">{on_hold}</ItemInnertext>{" "}
              Users
            </ItemContent>
          </Item>
          <Item>
            <ItemTitle bagCol="rgb(247, 121, 164)">Planning</ItemTitle>
            <ItemContent>
              <ItemInnertext col="rgb(247, 121, 164)">
                {plan_to_watch}
              </ItemInnertext>{" "}
              Users
            </ItemContent>
          </Item>
          {isbigscreen ? (
            <Item>
              <ItemTitle bagCol="rgb(232, 93, 117)">Completed</ItemTitle>
              <ItemContent>
                <ItemInnertext col="rgb(232, 93, 117)">
                  {completed}
                </ItemInnertext>{" "}
                Users
              </ItemContent>
            </Item>
          ) : null}
        </ItemContainer>

        <ProgressBarContainer gridTemCol={gridTemCol}>
          <ProgressBarItem first bagCol="rgb(104, 214, 57)"></ProgressBarItem>
          <ProgressBarItem bagCol="rgb(2, 169, 255)"></ProgressBarItem>
          <ProgressBarItem bagCol="rgb(146, 86, 243)"></ProgressBarItem>
          <ProgressBarItem bagCol="rgb(247, 121, 164)"></ProgressBarItem>
          <ProgressBarItem last bagCol="rgb(232, 93, 117)"></ProgressBarItem>
        </ProgressBarContainer>
      </StatusContainer>
    </div>
  );
};

export default Status;
