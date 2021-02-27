import React, { useContext } from 'react';
import Styled from '@emotion/styled';
import animeContext from '../context/anime/animeContext';

const StatsStyled = Styled.div`
  margin-top: 25px;

  h2 {
    font-weight: 500;
    font-size: 0.9rem;
    color: rgb(92,114,138);
    margin-bottom: 10px;
  }

  div.content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 25px;
    width: 800px;

    div.status {
      background: #FFF;
      border-radius: 4px;

      div.titles {
        display: flex;
        justify-content: space-around;
        padding: 20px 10px;

        div.title_item {
          display: flex;
          flex-flow: column wrap;
          align-items: center;

          p {
            font-size: 0.8rem;
            color: rgb(122,133,143);

            span.number {
              font-size: 0.9rem;
            }
          }

          span.title {
            padding: 6px 15px;
            border-radius: 4px;
            font-size: 0.9rem;
            margin-bottom: 5px;
            color: #FFF;
          }

          &:nth-of-type(1) {
            span.title {
              background: rgb(104, 214, 57);
            }

            p {
              span.number {
                color: rgb(104, 214, 57);
              }
            }
          }

          &:nth-of-type(2) {
            span.title {
              background: rgb(2, 169, 255);
            }

            p {
              span.number {
                color: rgb(2, 169, 255);
              }
            }
          }

          &:nth-of-type(3) {
            span.title {
              background: rgb(146, 86, 243);
            }

            p {
              span.number {
                color: rgb(146, 86, 243);
              }
            }
          }

          &:nth-of-type(4) {
            span.title {
              background: rgb(247, 121, 164);
            }

            p {
              span.number {
                color: rgb(247, 121, 164);
              }
            }
          }

          &:nth-of-type(5) {
            span.title {
              background: rgb(232, 93, 117);
            }

            p {
              span.number {
                color: rgb(232, 93, 117);
              }
            }
          }
        }
      }

      div.progress-bar {
        div {
          height: 11px;
        }

        div.bar-current {
          background: rgb(104, 214, 57);
          border-radius: 0px 0px 0px 4px;
        }
        div.bar-dropped {
          background: rgb(2, 169, 255);
        }
        div.bar-paused {
          background: rgb(146, 86, 243);
        }
        div.bar-planning {
          background: rgb(247, 121, 164);
        }
        div.bar-completed {
          background: rgb(232, 93, 117);
          border-radius: 0px 0px 4px 0px;
        }
      }
    }

    div.score {
      border: 1px solid red;
    }
  }
`;

const Stats = () => {
  const { currentAnime } = useContext(animeContext);

  const { total, watching, on_hold, plan_to_watch, dropped, completed } = currentAnime;
  
  let wp = ((100 * watching) / total).toFixed(1);
  let ohp = ((100 * on_hold) / total).toFixed(1);
  let pwp = ((100 * plan_to_watch) / total).toFixed(1);
  let dp = ((100 * dropped) / total).toFixed(1);
  let cp = ((100 * completed) / total).toFixed(1);
  console.log(Number(wp)+Number(ohp)+ Number(pwp) + Number(dp) + Number(cp));

  const gridTemplateColumns = `${wp}% ${dp}% ${ohp}% ${pwp}% ${cp}%`;

  return (
    <StatsStyled>
      <h2>Status Distribution</h2>

      <div className="content">
        <div className="status">
          <div className="titles">
            <div className="title_item">
              <span className="title">Current</span>
              <p><span className="number">{watching}</span> Users</p>
            </div>
            <div className="title_item">
              <span className="title">Dropped</span>
              <p><span className="number">{dropped}</span> Users</p>
            </div>
            <div className="title_item">
              <span className="title">Paused</span>
              <p><span className="number">{on_hold}</span> Users</p>
            </div>
            <div className="title_item">
              <span className="title">Planning</span>
              <p><span className="number">{plan_to_watch}</span> Users</p>
            </div>
          </div>

          <div className="progress-bar" style={{
            display: 'Grid',
            gridTemplateColumns
          }}>
            <div className="bar-current"></div>
            <div className="bar-dropped"></div>
            <div className="bar-paused"></div>
            <div className="bar-planning"></div>
            <div className="bar-completed"></div>
          </div>
        </div>
        <div className="score">
          <p>Score</p>
        </div>
      </div>
    </StatsStyled>
  );
}

export default Stats;