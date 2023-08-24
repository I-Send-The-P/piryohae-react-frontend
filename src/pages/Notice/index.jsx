import { List, ListItem } from "./styled";
import { ContentContainer } from "components/Content";
import { useState } from "react";

function Notice() {
  const [noticeList, setNoticeList] = useState([
    {
      title: "제목이다",
      creator: "작성자",
      date: "2023-08-24T19:07:38.605783",
    },
    {
      title: "제목이다",
      creator: "작성자",
      date: "2023-08-23T19:07:38.605783",
    },
    {
      title: "제목이다",
      creator: "작성자",
      date: "2023-08-22T19:07:38.605783",
    },
    {
      title: "제목이다",
      creator: "작성자",
      date: "2023-08-22T19:07:38.605783",
    },
    {
      title: "제목이다",
      creator: "작성자",
      date: "2023-08-22T19:07:38.605783",
    },
  ]);

  const dateString = (dateString) => {
    if (new Date(dateString).getDate() === new Date().getDate())
      return new Date(dateString).toLocaleTimeString().slice(0, -3);
    else return new Date(dateString).toLocaleDateString();
  };
  return (
    <ContentContainer>
      <List>
        {noticeList.map((notice) => (
          <ListItem
            icon={"png/sound.png"}
            title={notice.title}
            creator={notice.creator}
            date={dateString(notice.date)}
          ></ListItem>
        ))}
      </List>
    </ContentContainer>
  );
}

export default Notice;
