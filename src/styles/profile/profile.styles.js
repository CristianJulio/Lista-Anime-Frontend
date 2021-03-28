import styled from 'styled-components';
import { Container, middleTitle } from '../../globalStyle';

export const ProfileContainer = styled(Container)`
  height: 1500px;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-top: -125px;
`;

export const ImgBanner = styled.img`
  object-fit: cover;
  width: 100%;
  height: 400px;
`;

export const CabeceraProfile = styled.div`
  display: flex;
`;

export const AvatarImg = styled.img`
  width: 200px;
  height: 300px;
  margin-top: -120px;
  object-fit: cover;
`;

export const Username = styled(middleTitle)`
  padding: 20px;
`;