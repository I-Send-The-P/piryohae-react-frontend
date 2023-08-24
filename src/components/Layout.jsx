import { ROUTES_PATH_ALARM } from "constants/Routes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const { styled } = require("styled-components");

export const BaseLayout = ({
  children,
  title,
  isHome = false,
  isLogin = true,
}) => {
  return (
    <Container>
      <TopBar title={title} isHome={isHome} isLogin={isLogin} />
      {children}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #f5f5f5;
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

export const Switch = styled.div`
  box-sizing: border-box;
  width: 150px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  border: 3px solid #c82525;
  background-color: #fff;
`;
export const SwitchButton = styled.div`
  box-sizing: border-box;
  padding: 5px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Cafe24 Ssurround;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: ${(props) => (props.checked ? "#c82525" : "#fff")};
  color: ${(props) => (props.checked ? "#fff" : "#A9A9A9")};
  border-radius: 15px;
  margin: 0;
`;

const AlarmToggle = () => {
  const [isAlarm, setIsAlarm] = useState(false);
  return (
    <Switch>
      <SwitchButton checked={isAlarm} onClick={() => setIsAlarm(true)}>
        ON
      </SwitchButton>
      <SwitchButton checked={!isAlarm} onClick={() => setIsAlarm(false)}>
        OFF
      </SwitchButton>
    </Switch>
  );
};

const Blank = styled.div`
  width: 28px;
  height: 28px;
`;

const TopBar = ({ title, isHome, isLogin }) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  return (
    <TopBarStyle>
      {isHome || <BackButton onClick={() => navigate(-1)}>&lt;</BackButton>}
      <Logo>{title}</Logo>
      {isLogin ? (
        location === ROUTES_PATH_ALARM ? (
          <AlarmToggle />
        ) : (
          <Alarm onClick={() => navigate(ROUTES_PATH_ALARM)} />
        )
      ) : (
        <Blank />
      )}
    </TopBarStyle>
  );
};
