import { ContentContainer } from "components/Content";
import { Tag, TagList, QuestionList, QuestionItem } from "../Question/styled";
import { useState } from "react";

function Questions() {
  const [type, setType] = useState(1);
  return (
    <ContentContainer>
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

export default Questions;
