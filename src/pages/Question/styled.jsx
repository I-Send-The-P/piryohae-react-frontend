import { styled } from "styled-components";
import { useState } from "react";

export const TagList = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 10px 0px;
  align-items: center;
`;

export const Tag = styled.div`
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  background-color: ${(props) => (props.selected ? "#C82525" : "#fff")};
  padding: 10px;
  border-radius: 11px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-family: Cafe24 Ssurround air;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const QuestionList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  padding: 10px 5px;
`;

const QuestionContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
  background-color: #ffffff;
`;

const QuestionHeader = styled.div`
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  gap: 10px;
`;

const QuestionStatus = styled.div`
  padding: 5px;
  border-radius: 7px;
  background: ${(props) => (props.status ? "#585858" : "#C82525")};
  color: #fff;
  text-align: center;
  font-family: Cafe24 Ssurround air;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const QuestionTitle = styled.div`
  color: #000;
  font-family: Cafe24 Ssurround air;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  flex: 1;
  text-overflow: ellipsis;
  word-break: break-all;
  overflow: hidden;
  white-space: nowrap;
`;
const Icon = styled.span`
  color: #000;
  text-align: right;
  font-family: Cafe24 Ssurround air;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const QuestionContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: ${(props) => (props.isOpened ? "auto" : "0px")};
  padding: ${(props) => (props.isOpened ? "10px" : "0px")};
  overflow: hidden;
`;
const QuestionContentBody = styled.div`
  color: #5f5f5f;
  font-family: Cafe24 Ssurround air;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const QuestionDate = styled.div`
  color: #000;
  text-align: right;
  font-family: Cafe24 Ssurround air;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Hr = styled.hr`
  border: 1px solid #dddddd;
  width: 100%;
`;
export const QuestionItem = ({
  title,
  answerStatus,
  questionContent,
  answerContent,
  questionLastModifiedDate,
  answerLastModifiedDate,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <QuestionContainer onClick={() => setIsOpened((prev) => !prev)}>
      <QuestionHeader>
        <QuestionStatus status={answerStatus}>
          {answerStatus ? "답변완료" : "답변대기"}
        </QuestionStatus>
        <QuestionTitle>{title}</QuestionTitle>
        <Icon>&gt;</Icon>
      </QuestionHeader>

      <QuestionContent isOpened={isOpened}>
        <QuestionContentBody>{questionContent}</QuestionContentBody>
        <QuestionDate>{questionLastModifiedDate}</QuestionDate>
        <Hr />
        <QuestionContentBody>{answerContent}</QuestionContentBody>
        <QuestionDate>{answerLastModifiedDate}</QuestionDate>
      </QuestionContent>
    </QuestionContainer>
  );
};
