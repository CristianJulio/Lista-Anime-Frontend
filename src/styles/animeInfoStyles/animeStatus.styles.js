import styled from 'styled-components';
import { ButtonFilter } from '../temporadas/TemporadasFilterStyledComp';

export const AnimeStatusStyled = styled.div`
  width: 1135px;
  margin: ${(margin) => margin};
`;

export const StatusSelect = styled.select`
  width: 225px;
  appearance: none;
  border: none;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, .1);
  padding: 8px 15px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 4px;
`;

export const InputStatus = styled.input`
  padding: 8px 15px;
  border-radius: 4px;
  border: none;
  width: 225px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, .1);
  outline: none;
  margin: ${({margin}) => margin ? margin : "0px"};
`;

export const Button = styled.button`
  width: 110px;
  background: #45c2d6;
  padding: 8px;
  border: none;
  margin-left: 25px;
  border-radius: 4px;
  cursor: pointer;
  color: #FFF;
`;

export const SecondaryButton = styled(ButtonFilter)`
  padding: 8px 15px;
  width: 225px;
`;