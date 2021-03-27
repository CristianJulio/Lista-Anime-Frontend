import styled from 'styled-components';
import { NormalTitle } from '../../globalStyle';

export const ContentContainer = styled.div`
`;

export const GroupContainer = styled.div`
  display: grid;
  margin-bottom: 25px;
`;

export const LabelGroup = styled(NormalTitle)`
  margin-bottom: 10px;
`;

export const InputGroup = styled.input`
  width: 300px; 
  padding: 8px 15px;
  border-radius: 4px;
  border: none;
  outline: none;
  /* box-shadow: 2px 0px 3px rgba(0, 0, 0, .1); */
  box-shadow: ${({boxSha}) => boxSha ? boxSha : "2px 0px 3px rgba(0, 0, 0, .1)"}
`;

export const SaveButton = styled.button`
  background: #2b2d42;
  border: none;
  outline: none;
  padding: 8px 15px;
  border-radius: 4px;
  color: #FFF;
  cursor: pointer;
`;