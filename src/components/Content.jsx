import styled from "styled-components";

export const ContentContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
  background: #f5f5f5;
  overflow: hidden scroll;
  height: max-content;
`;

export const ContentTitle = styled.h1`
  color: #181818;
  font-family: Cafe24 Ssurround;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 5px;
  border-bottom: 2px solid #c82525;
  margin: 0;
  width: 100%;
`;
