import { useNavigate } from "react-router-dom";

const { styled } = require("styled-components");

export const BaseLayout = ({ children, title }) => {
  return (
    <Container>
      <TopBar title={title} />
      {children}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
`;

const TopBarStyle = styled.div`
  box-sizing: border-box;
  width: 393px;
  height: 67px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  background: #ffffff;
`;

const BackButton = styled.div`
  display: flex;
  width: 15px;
  height: 33px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Logo = styled.div`
  display: flex;
  width: 91px;
  height: 39px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Alarm = styled.button`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border: none;
  background-color: transparent;
  background-image: url("png/alarm.png");
  background-size: 100% 100%;
`;

const TopBar = ({ title }) => {
  const navigate = useNavigate();
  return (
    <TopBarStyle>
      <BackButton onClick={() => navigate(-1)}>&lt;</BackButton>
      <Logo>{title}</Logo>
      <Alarm />
    </TopBarStyle>
  );
};
