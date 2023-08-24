import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden scroll;
  box-sizing: border-box;
`;

const ListItemContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 15px;
`;

const ListItemHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  gap: 10px;
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
`;

const Title = styled.span`
  color: #c82525;
  font-family: Cafe24 Ssurround air;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  flex: 1;
`;
const Creator = styled.span`
  color: #000000;
  font-family: Cafe24 Ssurround air;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const ListItemFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Date = styled.span`
  color: #8f8f8f;
  text-align: right;
  font-family: Cafe24 Ssurround air;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const ListItem = ({ title, creator, date, icon }) => {
  return (
    <ListItemContainer>
      <ListItemHeader>
        <Icon src={icon}></Icon>
        <Title>{title}</Title>
        <Creator>{creator}</Creator>
      </ListItemHeader>
      <ListItemFooter>
        <Date>{date}</Date>
      </ListItemFooter>
    </ListItemContainer>
  );
};
