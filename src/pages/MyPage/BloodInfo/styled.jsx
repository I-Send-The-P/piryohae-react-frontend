import styled from "styled-components";

export const Switch = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 20px;
  border: 3px solid #c82525;
  background-color: #fff;
`;
export const SwitchButton = styled.div`
  box-sizing: border-box;
  padding: 5px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Cafe24 Ssurround;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: ${(props) => (props.checked ? "#c82525" : "#fff")};
  color: ${(props) => (props.checked ? "#fff" : "#A9A9A9")};
  border-radius: 15px;
  margin: 0;
`;
