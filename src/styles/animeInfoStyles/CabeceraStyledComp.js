import styled from 'styled-components';

export const StyledCabecera = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ImgCabecera = styled.img`
  margin-right: 25px;
  box-shadow: 0 0 29px rgba(49,54,68,.25);
  border-radius: 4px;
  height: 337px;
  width: 225px;
  object-fit: cover;
`;

export const TitleCabecera = styled.h2`
  margin-bottom: 15px;
  color: rgb(92,114,138);
  font-size: 1.3rem;
  font-weight: 400;
`;

export const SinopsisCabecera = styled.p`
  text-align: justify;
  line-height: 22px;
  color: rgb(92,114,138);
  font-size: 0.9rem;
`;