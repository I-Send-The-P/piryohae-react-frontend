import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden scroll;
  box-sizing: border-box;
  padding: 10px 0px;
`;

const ListItemContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border-radius: 16px;
  background: #fff;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  background-color: ${(props) =>
    props.isMine ? "rgba(200, 37, 37, 0.70)" : "#fff"};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Title = styled.span`
  color: #000;
  font-family: Cafe24 Ssurround;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Name = styled.span`
  color: ${(props) => (props.isMine ? "#fff" : "#C82525")};
  font-family: Cafe24 Ssurround;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  flex: 1;
`;

const Span = styled.span`
  color: ${(props) => (props.isMine ? "#fff" : "#7D7D7D")};
  font-family: Cafe24 Ssurround air;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const ListItem = ({ title, name, span, isMine }) => {
  return (
    <ListItemContainer isMine={isMine}>
      <Title isMine={isMine}>{title}</Title>
      <Name isMine={isMine}>{name}</Name>
      <Span isMine={isMine}>{span}</Span>
    </ListItemContainer>
  );
};

export const SubTitle = styled.span`
  color: #000;
  font-family: Cafe24 Ssurround;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 20px 0px 10px;
`;
