import MyInfo from "./MyInfo";
import BloodInfo from "./BloodInfo";
import {
  ContentContainer,
  ContentHeader,
  ContentTitle,
  ContentSubTitle,
} from "components/Content";
import { useState } from "react";

function MyPage() {
  const [isMyInfo, setIsMyInfo] = useState(true);
  const MyInfoComponent = isMyInfo ? ContentTitle : ContentSubTitle;
  const BloodInfoComponent = isMyInfo ? ContentSubTitle : ContentTitle;
  return (
    <>
      <ContentContainer>
        <ContentHeader>
          <MyInfoComponent
            style={{
              width: "50%",
              textAlign: "left",
            }}
            onClick={() => setIsMyInfo(true)}
          >
            {isMyInfo ? "" : "<"}
            개인정보
          </MyInfoComponent>
          <BloodInfoComponent
            style={{
              width: "50%",
              textAlign: "right",
            }}
            onClick={() => setIsMyInfo(false)}
          >
            헌혈정보
            {isMyInfo ? ">" : ""}
          </BloodInfoComponent>
        </ContentHeader>
        {isMyInfo ? <MyInfo></MyInfo> : <BloodInfo></BloodInfo>}
      </ContentContainer>
    </>
  );
}
export default MyPage;
