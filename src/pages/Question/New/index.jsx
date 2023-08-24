import { ContentContainer } from "components/Content";
import { TextInput, TextArea, Button } from "components/Input";
import { LeftTitle } from "pages/Signup/styled";
import { useState } from "react";
import { Tag, TagList } from "../styled";

function QuestionNew() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState(1);
  return (
    <ContentContainer style={{ height: "100%" }}>
      <LeftTitle style={{ margin: 0 }}>제목</LeftTitle>
      <TextInput
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></TextInput>
      <LeftTitle>유형</LeftTitle>
      <TagList>
        <Tag selected={type === 1} onClick={() => setType(1)}>
          헌혈참여
        </Tag>
        <Tag selected={type === 2} onClick={() => setType(2)}>
          헌혈상식
        </Tag>
        <Tag selected={type === 3} onClick={() => setType(3)}>
          계정
        </Tag>
        <Tag selected={type === 4} onClick={() => setType(4)}>
          프로그램
        </Tag>
      </TagList>
      <LeftTitle>내용</LeftTitle>
      <TextArea
        style={{ flex: 1, marginBottom: "20px" }}
        placeholder="내용을 입력하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></TextArea>
      <Button>문의하기</Button>
    </ContentContainer>
  );
}

export default QuestionNew;
