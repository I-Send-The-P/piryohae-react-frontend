import { ContentContainer } from "components/Content";
import { Img, ThinTitle, BoldTitle, ShareButton } from "./styled";
import { ROUTES_PATH_BLOOD_REQUEST } from "constants/Routes";
import { TextLink } from "components/Input";
import { useLocation } from "react-router-dom";

function RequestComplete() {
  const { state } = useLocation();
  return (
    <ContentContainer style={{ height: "100%", justifyContent: "center" }}>
      <Img src="png/complete.png"></Img>
      <ThinTitle>긴급헌혈</ThinTitle>
      <BoldTitle>요청완료</BoldTitle>
      <TextLink
        to={ROUTES_PATH_BLOOD_REQUEST + "/" + state}
        style={{ margin: "50px 0px 100px", textDecoration: "unset" }}
      >
        요청 게시글 보러가기 &gt;
      </TextLink>
      <ShareButton>
        <img src="png/clipboard.png" />
        클립보드에 붙여넣기
      </ShareButton>
    </ContentContainer>
  );
}
export default RequestComplete;
