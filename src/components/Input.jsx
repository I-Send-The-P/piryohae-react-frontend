import styled from "styled-components";
import { Link } from "react-router-dom";

export const TextInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border-radius: 7px;
  background: #fff;
  border: none;
  text-align: center;
  font-family: Cafe24 Ssurround air;
  &:focus,
  &:active,
  &:focus-visible {
    border: 2px solid #c82525;
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 7px;
  background: #c82525;
  padding: 15px;
  outline: none;
  border: none;
  color: #fff;
  text-align: center;
  font-family: Cafe24 Ssurround air;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const TextLink = styled(Link)`
  color: #000;
  text-align: center;
  font-family: Cafe24 Ssurround air;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
