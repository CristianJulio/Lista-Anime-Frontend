import styled from 'styled-components';
import { NormalTitle } from '../../globalStyle';
import {
  ItemsContainer,
  ImgItem,
  TextContainerItem,
  TitleTexCon,
  ContentTexCon,
  ItemCharacter
} from "./CharactersStyledComp";

export const StaffContainer = styled.div`
  margin-bottom: 25px;
`;

export const TitleStaff = styled(NormalTitle)`
  margin-bottom: 10px;
`;

export const StaffItemsContainer = styled(ItemsContainer)`
`;

export const ItemStaff = styled(ItemCharacter)`
  border-radius: 4px;
  justify-content: flex-start;
`;

export const ImgStaff = styled(ImgItem)`
  border-radius: 4px 0 0 4px;
`;

export const TextContainerStaff = styled(TextContainerItem)`
  text-align: left;
`;

export const NameStaffMember = styled(TitleTexCon)`
`;

export const RoleStaffMember = styled(ContentTexCon)`
`;