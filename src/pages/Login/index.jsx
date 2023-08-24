import { SubTitle, Title, Input, LoginButton } from "./styled";
import { TextLink } from "components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH_HOME } from "constants/Routes";
import { ContentContainer } from "components/Content";

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const login = () => {
    console.log(id, pw);
    navigate(ROUTES_PATH_HOME);
  };

  return (
    <ContentContainer>
      <Title>피료해</Title>
      <SubTitle>로그인</SubTitle>
      <Input
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></Input>
      <Input
        placeholder="비밀번호"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        type="password"
      ></Input>
      <LoginButton onClick={login}>로그인</LoginButton>
      <TextLink to="/signup">회원가입</TextLink>
      {/* <TextLink href="/idpw">아이디/비밀번호 찾기</TextLink> */}
    </ContentContainer>
  );
}

export default Login;
