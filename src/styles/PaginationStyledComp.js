import styled from 'styled-components';
import { Enlace } from '../globalStyle';

export const StyledPagination = styled.div`
  width: 600px;
  margin: 25px auto;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UlPagination = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LiPagination = styled.li`
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
  margin-right: 10px;
  text-align: center;
  padding: 10px 15px;
  border: 1px solid #ECECEC;
  border-radius: 4px;
  background: #FFF;
`;

export const ButtonPagination = styled.button`
  margin-right: 10px;
  background: #FFF;
  padding: 12px 15px;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
  border: 1px solid #ECECEC;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    box-shadow: none;
    cursor: default;
  }
`;

export const EnlacePagination = styled(Enlace)`
  color: #000;
`;