import { ContentContainer, ContentTitle } from "components/Content";
import { MenuButton, Menu, Banner } from "./styled";
import { useNavigate } from "react-router-dom";
import {
  ROUTES_PATH_BLOOD_REQUEST,
  ROUTES_PATH_BLOOD_REQUESTS,
  ROUTES_PATH_MY_PAGE,
  ROUTES_PATH_NOTICE,
  ROUTES_PATH_QUESTION,
} from "constants/Routes";

function Home() {
  const navigate = useNavigate();
  return (
    <ContentContainer style={{ justifyContent: "center" }}>
      <ContentTitle style={{ margin: "0px 0px 10px" }}>긴급헌혈</ContentTitle>
      <Menu>
        <MenuButton
          onClick={() => navigate(ROUTES_PATH_BLOOD_REQUEST)}
          subTitle={"긴급헌혈"}
          title={"요청하기"}
        ></MenuButton>
        <MenuButton
          onClick={() => navigate(ROUTES_PATH_BLOOD_REQUESTS)}
          subTitle={"긴급헌혈"}
          title={
            <>
              요청
              <br />
              리스트
            </>
          }
        ></MenuButton>
      </Menu>
      <ContentTitle style={{ margin: "30px 0px 10px" }}>회원</ContentTitle>
      <Menu style={{ height: "110px" }}>
        <MenuButton
          onClick={() => navigate(ROUTES_PATH_NOTICE)}
          isSmall={true}
          subTitle={
            <>
              서비스
              <br />
              소개
            </>
          }
          icon={"/png/info.png"}
        />
        <MenuButton
          onClick={() => navigate(ROUTES_PATH_QUESTION)}
          isSmall={true}
          subTitle={
            <>
              고객
              <br />
              센터
            </>
          }
          icon={"/png/chat.png"}
        />
        <MenuButton
          onClick={() => navigate(ROUTES_PATH_QUESTION)}
          isSmall={true}
          subTitle={
            <>
              공지
              <br />
              사항
            </>
          }
          icon={"/png/sound.png"}
        />
        <MenuButton
          onClick={() => navigate(ROUTES_PATH_MY_PAGE)}
          isSmall={true}
          subTitle={
            <>
              마이
              <br />
              페이지
            </>
          }
          icon={"/png/user.png"}
        />
      </Menu>
      <Menu style={{ height: "50px", margin: "12px 0px" }}>
        <MenuButton
          onClick={() => navigate(ROUTES_PATH_NOTICE)}
          subTitle={"헌혈 명예의 전당"}
          isSmall={true}
          icon={"png/rank.png"}
        ></MenuButton>
      </Menu>
      <Banner />
    </ContentContainer>
  );
}

export default Home;
