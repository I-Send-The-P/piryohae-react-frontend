import { ContentContainer } from "components/Content";
import { Button, TextInput } from "components/Input";
import { LeftTitle } from "pages/Signup/styled";
import { useState } from "react";
import { Select } from "pages/Signup/styled";

function RequestNew() {
  const [title, setTitle] = useState("");
  const [registerNumber, setRegisterNumber] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalNumber, setHospitalNumber] = useState("");
  const [bloodTypeId, setBloodTypeId] = useState(1);
  const [bloodProduct, setBloodProduct] = useState("");
  const [deadline, setDeadline] = useState("");
  const [relationShip, setRelationShip] = useState("");
  const [content, setContent] = useState("");
  const [bloodDonationTypeId, setBloodDonationTypeId] = useState(1);
  return (
    <ContentContainer style={{ alignItems: "start" }}>
      <LeftTitle style={{ margin: 0 }}>제목</LeftTitle>
      <TextInput
        placeholder="번호를 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></TextInput>
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
      <Button>요청하기</Button>
    </ContentContainer>
  );
}

export default RequestNew;
