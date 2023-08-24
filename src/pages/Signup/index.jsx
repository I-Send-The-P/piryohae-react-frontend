import { ContentContainer } from "components/Content";
import { TextInput } from "components/Input";
import {
  LeftTitle,
  CheckButton,
  CheckContainer,
  SignupButton,
  ToggleButton,
  Select,
} from "./styled";
import { useState } from "react";

function Signup() {
  const [id, setId] = useState("");
  const [isIdChecked, setIsIdChecked] = useState(false);
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [isMan, setIsMan] = useState(true);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isPhoneChecked, setIsPhoneChecked] = useState(false);
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [blood, setBlood] = useState("A+");
  const [nickname, setNickname] = useState("");
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);

  return (
    <ContentContainer style={{ alignItems: "start" }}>
      <LeftTitle>ID</LeftTitle>
      <CheckContainer>
        <TextInput
          style={{ flex: 1 }}
          placeholder="ID를 입력하세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></TextInput>
        <CheckButton checked={isIdChecked}>
          중복
          <br />
          확인
        </CheckButton>
      </CheckContainer>
      <LeftTitle>PW</LeftTitle>
      <TextInput
        placeholder="PW를 입력하세요"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        type="password"
      ></TextInput>
      <LeftTitle>PW 재입력</LeftTitle>
      <TextInput
        placeholder="PW를 재입력하세요"
        value={pwCheck}
        onChange={(e) => setPwCheck(e.target.value)}
        type="password"
      ></TextInput>
      <LeftTitle>성명</LeftTitle>
      <TextInput
        placeholder="성명을 입력하세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></TextInput>
      <LeftTitle>생년월일</LeftTitle>
      <TextInput
        placeholder="생년월일을 입력하세요"
        value={birth}
        onChange={(e) => setBirth(e.target.value)}
      ></TextInput>
      <LeftTitle>성별</LeftTitle>
      <CheckContainer style={{ gap: "3px" }}>
        <ToggleButton checked={isMan} onClick={() => setIsMan(true)}>
          남
        </ToggleButton>
        <ToggleButton checked={!isMan} onClick={() => setIsMan(false)}>
          여
        </ToggleButton>
      </CheckContainer>
      <LeftTitle>이메일</LeftTitle>
      <TextInput
        placeholder="이메일을 입력하세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextInput>
      <LeftTitle>휴대폰 번호</LeftTitle>
      <CheckContainer>
        <TextInput
          style={{ flex: 1 }}
          placeholder="-를 제외하고 입력하세요"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></TextInput>
        <CheckButton checked={isPhoneChecked}>
          중복
          <br />
          확인
        </CheckButton>
      </CheckContainer>
      <LeftTitle>주소</LeftTitle>
      <CheckContainer>
        <TextInput
          style={{ flex: 1 }}
          placeholder="주소 찾기"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></TextInput>
        <CheckButton>
          주소
          <br />
          검색
        </CheckButton>
      </CheckContainer>
      <TextInput
        style={{ marginTop: "10px" }}
        placeholder="상세 주소 입력"
        value={detailAddress}
        onChange={(e) => setDetailAddress(e.target.value)}
      ></TextInput>
      <LeftTitle>혈액</LeftTitle>
      <Select value={blood} onChange={(e) => setBlood(e.target.value)}>
        <option value={"A+"}>A+</option>
        <option value={"A-"}>A-</option>
        <option value={"B+"}>B+</option>
        <option value={"B-"}>B-</option>
        <option value={"O+"}>O+</option>
        <option value={"O-"}>O-</option>
        <option value={"AB+"}>AB+</option>
        <option value={"AB-"}>AB-</option>
      </Select>
      <LeftTitle>닉네임</LeftTitle>
      <CheckContainer>
        <TextInput
          style={{ flex: 1 }}
          placeholder="닉네임을 입력하세요"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        ></TextInput>
        <CheckButton checked={isNicknameChecked}>
          중복
          <br />
          확인
        </CheckButton>
      </CheckContainer>
      <SignupButton>회원가입</SignupButton>
    </ContentContainer>
  );
}
export default Signup;
