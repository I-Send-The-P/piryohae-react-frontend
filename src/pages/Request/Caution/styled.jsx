import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  flex: 1;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: #000;
  text-align: center;
  font-family: Cafe24 Ssurround;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SubTitle = styled.h2`
  color: #000;
  font-family: Cafe24 Ssurround;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 228.523%;
  margin: 0;
`;

export const Content = styled.div`
  color: #565656;
  font-family: Cafe24 Ssurround air;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  margin-top: 20px;
`;
