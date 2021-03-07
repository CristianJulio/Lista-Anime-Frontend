import styled, { css } from 'styled-components';
import { SelectFilter, ButtonFilter } from '../temporadas/TemporadasFilterStyledComp';

export const StyledBrowserFilter = styled.form`
  margin-bottom: 25px;
  display: flex;
  justify-content: space-around;
`;

export const InputBrowser = styled.input`
  padding: 7px 15px;
  margin-right: 25px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 5px rgba(0,0,0,.1);
  width: 120px;
  outline: none;
  transition: all .3s;
  color: #8f9eac;

  &:focus {
    width: 200px;
  }
`;

export const SelectBrowser = styled(SelectFilter)`
  text-align: center;
  box-shadow: 0 0 5px ${({boxShaCol}) => boxShaCol ? boxShaCol : "rgba(0,0,0,.1)"};

  /* ${({boxShaCol}) => boxShaCol === true ? (
    css`
     box-shadow: 0 0 5px #d65245; 
    `  
  ) : null} */
`;

export const ButtonBrowser = styled(ButtonFilter)`
  padding: 7px 0;
`;