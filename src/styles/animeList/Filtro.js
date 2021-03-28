import styled from "styled-components";
import { middleTitle } from "../../globalStyle";

export const InputFilter = styled.input`
  outline: none;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
`;

export const FullInput = styled.div`
  width: 200px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  color: rgb(92, 114, 138);
  display: flex;
  align-items: center;
`;

export const InputContainer = styled.div`
  margin-bottom: 25px;
`;

export const CleanButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 12pt;
  color: rgb(92, 114, 138);
`;

export const TitleFiltro = styled(middleTitle)`
  margin-bottom: 10px;
`;