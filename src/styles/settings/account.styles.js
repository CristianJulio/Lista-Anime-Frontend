import styled from 'styled-components';
import { middleTitle, NormalTitle } from '../../globalStyle';

export const ContentContainer = styled.div`
  margin-bottom: 25px;
  background: #FFF;
  padding: 20px;
  border-radius: 4px;
`;

export const GroupContainer = styled.div`
  display: grid;
  margin-bottom: 25px;
`;

export const TitleContent = styled(middleTitle)`
  margin: 25px 0;
  border-top: 1px solid #c0c4cc;
  padding-top: 25px;
`;

export const LabelGroup = styled(NormalTitle)`
  margin-bottom: 10px;
`;

export const InputGroup = styled.input`
  width: 100%;
  background: rgba(237,241,245, .6);
  color: rgb(92,114,138);
  border: none;
  padding: 0 15px;
  height: 40px;
  font-size: 11pt;
  border-radius: 4px;
  outline: none;
  box-shadow: 2px 0px 3px rgba(0, 0, 0, .1);
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

export const AvatarChangeContainer = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 85% 15%;
`;

export const AvatarPreview = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  object-fit: cover;
`;