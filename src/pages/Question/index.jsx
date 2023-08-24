import { ContentContainer, ContentTitle } from "components/Content";
import { Menu, MenuButton } from "pages/Home/styled";
import { Tag, TagList, QuestionList, QuestionItem } from "./styled";
import { useState } from "react";

function Question() {
  const [type, setType] = useState(1);
  return (
    <ContentContainer>
      <ContentTitle>1:1 문의</ContentTitle>
      <Menu style={{ padding: "20px 0px" }}>
        <MenuButton
          subTitle={"1:1"}
          title={"문의하기"}
          size="small"
        ></MenuButton>
        <MenuButton
          subTitle={"1:1"}
          title={"문의내역"}
          icon={"png/list.png"}
          size="small"
        ></MenuButton>
      </Menu>
      <ContentTitle>많이하는 질문</ContentTitle>
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
      <QuestionList>
        <QuestionItem
          answerStatus={true}
          title={"프론트엔드는 도대체 어떻게 하나요??"}
          questionContent={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
          answerContent={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
          questionLastModifiedDate={"2021.09.01"}
          answerLastModifiedDate={"2021.09.01"}
        ></QuestionItem>
        <QuestionItem
          answerStatus={false}
          title={"프론트엔드는 도대체 어떻게 하나요??"}
          questionContent={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
          answerContent={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
          questionLastModifiedDate={"2021.09.01"}
          answerLastModifiedDate={"2021.09.01"}
        ></QuestionItem>
        <QuestionItem
          answerStatus={true}
          title={"프론트엔드는 도대체 어떻게 하나요??"}
          questionContent={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
          answerContent={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
          questionLastModifiedDate={"2021.09.01"}
          answerLastModifiedDate={"2021.09.01"}
        ></QuestionItem>
        <QuestionItem
          answerStatus={false}
          title={"프론트엔드는 도대체 어떻게 하나요??"}
          questionContent={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
          answerContent={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
          questionLastModifiedDate={"2021.09.01"}
          answerLastModifiedDate={"2021.09.01"}
        ></QuestionItem>
        <QuestionItem
          answerStatus={true}
          title={"프론트엔드는 도대체 어떻게 하나요??"}
          questionContent={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
          answerContent={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
          questionLastModifiedDate={"2021.09.01"}
          answerLastModifiedDate={"2021.09.01"}
        ></QuestionItem>
        <QuestionItem
          answerStatus={false}
          title={"프론트엔드는 도대체 어떻게 하나요??"}
          questionContent={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
          answerContent={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
          questionLastModifiedDate={"2021.09.01"}
          answerLastModifiedDate={"2021.09.01"}
        ></QuestionItem>
        <QuestionItem
          answerStatus={true}
          title={"프론트엔드는 도대체 어떻게 하나요??"}
          questionContent={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
          answerContent={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
          questionLastModifiedDate={"2021.09.01"}
          answerLastModifiedDate={"2021.09.01"}
        ></QuestionItem>
        <QuestionItem
          answerStatus={false}
          title={"프론트엔드는 도대체 어떻게 하나요??"}
          questionContent={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
          answerContent={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
          questionLastModifiedDate={"2021.09.01"}
          answerLastModifiedDate={"2021.09.01"}
        ></QuestionItem>
        <QuestionItem
          answerStatus={true}
          title={"프론트엔드는 도대체 어떻게 하나요??"}
          questionContent={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
          answerContent={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
          questionLastModifiedDate={"2021.09.01"}
          answerLastModifiedDate={"2021.09.01"}
        ></QuestionItem>
        <QuestionItem
          answerStatus={false}
          title={"프론트엔드는 도대체 어떻게 하나요??"}
          questionContent={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
          answerContent={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
          questionLastModifiedDate={"2021.09.01"}
          answerLastModifiedDate={"2021.09.01"}
        ></QuestionItem>
      </QuestionList>
    </ContentContainer>
  );
}

export default Question;
