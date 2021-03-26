import styled from 'styled-components';
import { Container, Enlace } from '../../globalStyle';

export const LoginContainer = styled(Container)`
  background: rgb(237,241,245);
`;

export const TitleLogin = styled.h2`
  font-size: 35pt;
  text-align: center;
  color: #2b2d42;
`;

export const FormLogin = styled.form`
  width: 300px;
  margin: 50px auto 0 auto;
  display: grid;
  grid-gap: 25px;
`;

export const InputForm = styled.input`
  padding: 10px 10px;
  border-radius: 6px;
  border: none;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, .1);
  outline: none;
  color: #868686;
`;

export const ButtonForm = styled.button`
  width: 150px;
  margin: 0 auto;
  padding: 10px 0;
  border-radius: 6px;
  border: none;
  background: #2b2d42;
  color: #FFF;
  cursor: pointer;
`;

export const EnlaceLogin = styled(Enlace)`
  text-align: center;
  display: block;
  width: 300px;
  margin: 25px auto;
`;

export const TermsContainer = styled.div`
  width: 260px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;