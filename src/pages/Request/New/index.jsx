import { ContentContainer } from "components/Content";
import { Button, TextInput } from "components/Input";
import { LeftTitle } from "pages/Signup/styled";
import { useState } from "react";
import { Select } from "pages/Signup/styled";
import { useEffect } from "react";
import {
  getBloodTypeCategories,
  getBloodDonationCategories,
} from "api/CategoriesAPI";
import { postRequest } from "api/RequestsAPI";
import { ROUTES_PATH_HOME } from "constants/Routes";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function RequestNew() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [registerNumber, setRegisterNumber] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalNumber, setHospitalNumber] = useState("");
  const [bloodTypeId, setBloodTypeId] = useState(1);
  const [bloodProduct, setBloodProduct] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [relationship, setRelationship] = useState("");
  const [content, setContent] = useState("");
  const [bloodDonationTypeId, setBloodDonationTypeId] = useState(1);
  const [bloodTypes, setBloodTypes] = useState([]);
  const [bloodDonationTypes, setBloodDonationTypes] = useState([]);
  useEffect(() => {
    getBloodTypeCategories().then((res) => setBloodTypes(res.data));
    getBloodDonationCategories().then((res) => setBloodDonationTypes(res.data));
  }, []);
  return (
    <ContentContainer style={{ alignItems: "start" }}>
      <LeftTitle style={{ margin: 0 }}>제목</LeftTitle>
      <TextInput
        placeholder="제목을 입력하세요"
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
        placeholder="의료기관 이름을 입력하세요"
        value={hospitalName}
        onChange={(e) => setHospitalName(e.target.value)}
      ></TextInput>
      <LeftTitle>요청 의료기관 번호</LeftTitle>
      <TextInput
        placeholder="의료기관 번호를 입력하세요"
        value={hospitalNumber}
        onChange={(e) => setHospitalNumber(e.target.value)}
      ></TextInput>
      <LeftTitle>환자 혈액형</LeftTitle>
      <Select
        value={bloodTypeId}
        onChange={(e) => setBloodTypeId(e.target.value)}
      >
        {bloodTypes?.map((bloodType) => (
          <option key={bloodType.id} value={bloodType.id}>
            {bloodType.bloodType}
          </option>
        ))}
      </Select>
      <LeftTitle>필요 혈액 제제</LeftTitle>
      <TextInput
        placeholder="필요 혈액 제제를 입력하세요"
        value={bloodProduct}
        onChange={(e) => setBloodProduct(e.target.value)}
      ></TextInput>
      <LeftTitle>마감기한</LeftTitle>
      <DatePicker
        showIcon
        selected={deadline}
        onChange={(date) => setDeadline(date)}
      />
      <LeftTitle>환자와의 관계</LeftTitle>
      <TextInput
        placeholder="환자와의 관계를 입력하세요"
        value={relationship}
        onChange={(e) => setRelationship(e.target.value)}
      ></TextInput>
      <LeftTitle>요청 사연</LeftTitle>
      <TextInput
        placeholder="내용을 입력하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></TextInput>
      <LeftTitle>헌혈종류 (전혈, 혈소판 등)</LeftTitle>
      <Select
        value={bloodDonationTypeId}
        onChange={(e) => setBloodDonationTypeId(e.target.value)}
      >
        {bloodDonationTypes?.map((bloodDonationType) => (
          <option key={bloodDonationType.id} value={bloodDonationType.id}>
            {bloodDonationType.bloodDonation}
          </option>
        ))}
      </Select>
      <LeftTitle></LeftTitle>
      <Button
        onClick={() => {
          postRequest({
            title,
            registerNumber: registerNumber,
            hospitalName,
            hospitalNumber: hospitalNumber,
            myBloodTypeId: +bloodTypeId,
            bloodProduct,
            deadline: deadline.toISOString(),
            relationship,
            content,
            bloodDonationTypeId: +bloodDonationTypeId,
          }).then(() => {
            alert("요청이 완료되었습니다.");
            navigate(ROUTES_PATH_HOME);
          });
        }}
      >
        요청하기
      </Button>
    </ContentContainer>
  );
}

export default RequestNew;
