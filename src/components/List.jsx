import styled from "styled-components";

export const List = styled.div`
  width: 100%;
  overflow: hidden scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
  gap: 20px;
`;

const ListItemContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 10px;
`;

const ListItemHeader = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const ListItemTitle = styled.div`
  color: #000;
  font-family: Cafe24 Ssurround air;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Tag = styled.div`
  padding: 5px 10px;
  border-radius: 7px;
  background: #ec9898;
  color: #000;
  text-align: center;
  font-family: Cafe24 Ssurround air;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Date = styled.div`
  flex: 1;
  color: #8f8f8f;
  text-align: right;
  font-family: Cafe24 Ssurround air;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const ListItemContent = styled.div`
  width: 100%;
  display: flex;
  color: #8f8f8f;
  font-family: Cafe24 Ssurround air;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  max-height: 3.6em;
`;

export const ListItem = ({ bloodType, status, title, date, content }) => {
  return (
    <ListItemContainer>
      <ListItemHeader>
        <Tag style={{ backgroundColor: "#EC9898" }}>{bloodType}</Tag>
        <Tag
          style={{
            backgroundColor: `${status ? "#585858" : "#C82525"}`,
            color: "#fff",
          }}
        >
          {status ? "헌혈완료" : "헌혈대기"}
        </Tag>
        <Date>{date}</Date>
      </ListItemHeader>
      <ListItemTitle>{title}</ListItemTitle>
      <ListItemContent>{content}</ListItemContent>
    </ListItemContainer>
  );
};
