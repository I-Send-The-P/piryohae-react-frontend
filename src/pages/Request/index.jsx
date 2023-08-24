import {
  ContentContainer,
  ContentHeader,
  ContentSubTitle,
  ContentTitle,
} from "components/Content";
import { Button, TextInput } from "components/Input";
import { LeftTitle } from "pages/Signup/styled";
import { useEffect, useState } from "react";
import { Select } from "pages/Signup/styled";
import { Tag } from "pages/Question/styled";
import { getRequest } from "api/RequestsAPI";

function Request() {
  const [isMine, setIsMine] = useState(false);
  // const [creator, setCreator] = useState("황석영");
  const [status, setStatus] = useState(false);
  const [title, setTitle] = useState("제목입니다제목입니다가나다라마바사");
  const [registerNumber, setRegisterNumber] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalNumber, setHospitalNumber] = useState("");
  const [bloodTypeId, setBloodTypeId] = useState(1);
  const [bloodProduct, setBloodProduct] = useState("");
  const [deadline, setDeadline] = useState("");
  const [relationShip, setRelationShip] = useState("");
  const [content, setContent] = useState("");
  const [bloodDonationTypeId, setBloodDonationTypeId] = useState(1);

  useEffect(() => {
    const requestId = window.location.pathname.split("/")[2];
    getRequest(requestId).then((res) => {
      setBloodDonationTypeId(res.data.bloodDonationTypeId);
      setContent(res.data.content);
      setRelationShip(res.data.relationship);
      setDeadline(res.data.deadline);
      setBloodProduct(res.data.bloodProduct);
      setBloodTypeId(res.data.bloodTypeId);
      setHospitalNumber(res.data.hospitalNumber);
      setHospitalName(res.data.hospitalName);
      setRegisterNumber(res.data.registerNumber);
      setTitle(res.data.title);
      setStatus(res.data.requestStatusId);
    }, []);
  });

  return (
    <ContentContainer style={{ alignItems: "start" }}>
      {isMine ? (
        <>
          <LeftTitle style={{ margin: 0 }}>제목</LeftTitle>
          <TextInput
            placeholder="번호를 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></TextInput>
        </>
      ) : (
        <>
          <ContentHeader>
            <ContentTitle>{title}</ContentTitle>
            {/* <ContentSubTitle
              style={{
                fontSize: "16px",
                fontFamily: "Cafe24 Ssurround Air",
                width: "100%",
              }}
            >
              {creator}
            </ContentSubTitle> */}
            <ContentSubTitle style={{ width: "auto" }}>
              <Tag
                style={{
                  backgroundColor: "#C82525",
                  color: "#fff",
                  wordBreak: "keep-all",
                }}
              >
                {status ? "헌혈완료" : "헌혈대기"}
              </Tag>
            </ContentSubTitle>
          </ContentHeader>
        </>
      )}

      <LeftTitle>수혈자 등록번호</LeftTitle>
      <TextInput
        placeholder="번호를 입력하세요"
        value={registerNumber}
        onChange={(e) => setRegisterNumber(e.target.value)}
      ></TextInput>
      <LeftTitle>요청 의료기관 이름</LeftTitle>
      <TextInput
        placeholder="번호를 입력하세요"
        value={hospitalName}
        onChange={(e) => setHospitalName(e.target.value)}
      ></TextInput>
      <LeftTitle>요청 의료기관 번호</LeftTitle>
      <TextInput
        placeholder="번호를 입력하세요"
        value={hospitalNumber}
        onChange={(e) => setHospitalNumber(e.target.value)}
      ></TextInput>
      <LeftTitle>환자 혈액형</LeftTitle>
      <Select
        value={bloodTypeId}
        onChange={(e) => setBloodTypeId(e.target.value)}
      >
        <option value={1}>A+</option>
        <option value={2}>A-</option>
        <option value={3}>B+</option>
        <option value={4}>B-</option>
        <option value={5}>O+</option>
        <option value={6}>O-</option>
        <option value={7}>AB+</option>
        <option value={8}>AB-</option>
      </Select>
      <LeftTitle>필요 혈액 제제</LeftTitle>
      <TextInput
        placeholder="번호를 입력하세요"
        value={bloodProduct}
        onChange={(e) => setBloodProduct(e.target.value)}
      ></TextInput>
      <LeftTitle>마감기한</LeftTitle>
      <TextInput
        placeholder="번호를 입력하세요"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      ></TextInput>
      <LeftTitle>환자와의 관계</LeftTitle>
      <TextInput
        placeholder="번호를 입력하세요"
        value={relationShip}
        onChange={(e) => setRelationShip(e.target.value)}
      ></TextInput>
      <LeftTitle>요청 사연</LeftTitle>
      <TextInput
        placeholder="번호를 입력하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></TextInput>
      <LeftTitle>헌혈종류 (전혈, 혈소판 등)</LeftTitle>
      <Select
        value={bloodDonationTypeId}
        onChange={(e) => setBloodDonationTypeId(e.target.value)}
      >
        <option value={1}>전혈</option>
        <option value={2}>혈소판</option>
      </Select>
      <LeftTitle></LeftTitle>
      {isMine ? <Button>수정하기</Button> : <Button>수락하기</Button>}
    </ContentContainer>
  );
}

export default Request;
