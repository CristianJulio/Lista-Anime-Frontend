import styled from 'styled-components';

export const StyledAnimeFilter = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
`;

export const SelectFilter = styled.select`
  appearance: none;
  border-radius: 6px;
  font-size: 11pt;
  margin-right: 25px;
  padding: 5px 16px;
  color: #8f9eac;
  border: 1px solid #f7f7f7;
  width: 150px;
  box-shadow: 0 0 5px rgba(0,0,0,.1);
  transition: all .3s;
  box-shadow: 15px 15px 15px #ECECEC;
  cursor: pointer;
  font-size: 11pt;

  &:hover {
    box-shadow: none;
  }
`;

export const ButtonFilter = styled.button`
  background: #2b2d42;
  border: 1px solid #2b2d42;
  border-radius: 6px;
  color: #FFF;
  width: 100px;
  transition: all .3s;
  cursor: pointer;

  &:disabled {
    background: #ECECEC;
    color: #929292;
    border: 1px solid #929292;
    cursor: default;
    transform: scale(1);
  }
`;