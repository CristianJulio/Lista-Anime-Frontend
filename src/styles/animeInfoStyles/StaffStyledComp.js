import styled from 'styled-components';
import { NormalTitle } from '../../globalStyle';

export const StaffContainer = styled.div`
  margin-bottom: 25px;
`;

export const TitleStaff = styled(NormalTitle)`
  margin-bottom: 10px;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px 25px;
  width: 950px;
`;

export const ItemStaff = styled.div`
  background: #FFF;
  border-radius: 4px;
  background: rgb(250,250,250);
  display: flex;
  justify-content: flex-start;
`;

export const ImgStaff = styled.img`
  width: 60px;
  height: 80px;
  object-fit: cover;
`;

export const TextContainerStaff = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  padding: 10px;
`;

export const NameStaffMember = styled.span`
  color: rgb(92,114,138);
  font-weight: 400;
  font-size: 0.8rem;
`;

export const RoleStaffMember = styled.span`
  color: rgb(146,153,161);
  font-weight: 300;
  font-size: 0.75rem;
`;