import styled from 'styled-components';
import { Container, middleTitle } from '../../globalStyle';

export const SettingsContainer = styled(Container)`
`;

export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 77%;;
  grid-gap: 3%;
`;

export const TitleSettings = styled(middleTitle)`
  margin-bottom: 25px;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const MainContent = styled.div`
  width: 77%;
`;