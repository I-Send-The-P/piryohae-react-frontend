import { Title, Button } from "components/Input";
import styled from "styled-components";

export const LeftTitle = styled(Title)`
  width: 100%;
  text-align: left;
  margin-top: 20px;
`;

export const CheckButton = styled.button`
  border-radius: 7px;
  border: 2px solid #c82525;
  background: #fff;
  padding: 0px 15px;
  font-family: Cafe24 Ssurround air;
  margin-left: 15px;
  ${(props) =>
    props.checked
      ? `
    color: #fff;
    background: #c82525;
  `
      : `
    color: black;
  `}
`;

export const CheckContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const SignupButton = styled(Button)`
  margin: 50px 0px;
  padding: 10px 80px;
`;

export const ToggleButton = styled.button`
  padding: 10px 30px;
  border-radius: 5px;
  text-align: center;
  font-family: Cafe24 Ssurround air;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  outline: none;
  border: none;
  background: ${(props) => (props.checked ? "rgba(200, 37, 37, 0.7)" : "#fff")};
  color: ${(props) => (props.checked ? "#fff" : "#000")};
`;

export const Select = styled.select`
  width: 125px;
  border: none;
  border-radius: 7px;
  background: #fff;
  padding: 10px;
  color: #000;
`;
