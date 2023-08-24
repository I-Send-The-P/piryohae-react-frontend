import styled from "styled-components";
import { Button, TextInput } from "components/Input";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 98px 20px 0px;
`;

export const Title = styled.h1`
  color: #000;
  text-align: center;
  font-family: Cafe24 Ssurround air;
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0;
`;

export const SubTitle = styled.h2`
  color: #5f5f5f;
  text-align: center;
  font-family: Cafe24 Ssurround air;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 8px 0px 100px;
`;

export const Input = styled(TextInput)`
  margin-bottom: 13px;
`;

export const LoginButton = styled(Button)`
  margin: 60px 0px 30px 0px;
`;
