import { ContentContainer } from "components/Content";
import { Content, SubTitle, Title, Container, ButtonContainer } from "./styled";
import { useState } from "react";
import { Button } from "components/Input";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH_BLOOD_REQUESTS } from "constants/Routes";

function RequestCaution() {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  return (
    <ContentContainer style={{ alignItems: "start", height: "100%" }}>
      {page === 1 && (
        <Container>
          <Title>헌혈 자격</Title>
          <SubTitle>나이</SubTitle>
          <Content>
            전혈 헌혈 : 만 16~69세
            <br /> 혈장 성분 헌혈 : 만 17~69세
            <br /> 혈소판 성분 헌혈,
            <br /> 혈소판 혈장 성분 헌혈 : 만17 ~ 59세
            <br />
          </Content>
          <SubTitle>체중</SubTitle>
          <Content>
            남자 : 50kg 이상
            <br />
            여자 : 45kg 이상
          </Content>
          <SubTitle>건강진단</SubTitle>
          <Content>
            혈압(mmHg) : 수축기 90~ 179, 이완기 100미만 <br />
            체온(°C) : 37.5°C 이하
            <br />
            맥박(회/분) : 50~100
          </Content>
          <SubTitle>헌혈 간격</SubTitle>
          <Content>
            전혈 헌혈 : 2개월 경과
            <br />
            혈장 성분 헌혈, 혈소판 성분 헌혈, 혈소판 혈장 성분 헌혈 : 14일 경과
          </Content>
          <SubTitle>헌혈 횟수</SubTitle>
          <Content>
            전혈 헌혈: 최근 1년 이내에 전혈 헌혈 횟수 최대 5회
            <br />
            혈소판 성분헌혈, 혈소판 혈장 성분 헌혈: 최근 1년 이내에 성분 헌혈
            횟수 최대 24회
          </Content>
        </Container>
      )}
      {page === 2 && (
        <Container>
          <Title>헌혈 자격</Title>
          <SubTitle>외국여행</SubTitle>
          <Content>외국을 여행한 경우는 귀국 후 1개월 경과</Content>
          <SubTitle>질병</SubTitle>
          <Content>
            감염병 완치 후 일정기간 경과
            <br />
            기타 질병 완치 후 일정기간 경과
          </Content>
          <SubTitle>약물</SubTitle>
          <Content>
            건선 치료제 복용 후 3년 경과(일부는 영구 헌혈금지)
            <br />
            전립선 비대증 치료제 복용 후 1개월 또는 6개월 경과
            <br />
            탈모증 치료제 복용 후 1개월 경과
            <br />
            여드름 치료제 복용 후 1개월 경과
            <br />
            기타 헌혈 금지 약물 복용 후 일정기간 경과
          </Content>
          <SubTitle>예방 접종</SubTitle>
          <Content>
            인플루엔자, A형 간염, 일본 뇌염 등 예방 접종 받은 후 24시간 경과
            <br />
            B형 간염 예방 접종 받은 날로부터 2주 경과
            <br />
            홍역, 유행성이하선염, 풍진(MMR)의 혼합 백신, 수두 등 예방 접종 받은
            날로부터 4주 경과
          </Content>
          <SubTitle>진료</SubTitle>
          <Content>
            수혈 후 1년 경과 기타 진료 후 일정기간 경과
            <br /> ※ 임신 중인자, 분만 또는 유산 후 6개월 이내인 자는 헌혈에
            참여하실 수 없습니다.
          </Content>
        </Container>
      )}
      {page === 3 && (
        <Container>
          <Title>헌혈 자격</Title>
          <SubTitle>검사 결과</SubTitle>
          <Content>
            과거 헌혈검사 (B형 간염, C형 간염, 매독 검사 등) 결과 정상
          </Content>
          <SubTitle>비고</SubTitle>
          <Content>
            장애가 있는 경우 장애 등급에 관계없이 헌혈 기록 카드 문진 항목을
            이해할 수 있어야 헌 혈이 가능함
            <br />
            (의사 소통이 원활하지 않는 경우 이해 관계가 없는 제 3자의 도움을
            받을 것 을 권장함)
          </Content>
          <SubTitle>기타</SubTitle>
          <Content>
            문진 결과 헌혈 적합에 해당되는 경우 헌혈 가능 헌혈 참여 시 반드시
            기본 신분증 지참 필요
          </Content>
          <SubTitle>※ 기본 신분증의 정의</SubTitle>
          <Content>
            헌혈 기록 카드의 실명 확인 방법에 있는 신분증으로 사진이 부착 되어
            있는 주민등록증, 여 권, 그 밖의 신분 증명서를 말하며 공공 기관 및
            법인등이 발급한 사진이 부착되어 있는 그 밖의 신분증을 말함 (
            고교생의 경우 사진 및 이름이 표시된 학생증 )
          </Content>
        </Container>
      )}
      {page === 4 && (
        <Container>
          <Title>헌혈전 유의사항</Title>
          <Content>
            1. 헌혈 당일 몸상태가 좋지 않을 경우, 헌혈이 제한될 수
            있습니다.(전날 과음, 피로 등)
            <br />
            <br />
            2. 헌혈 전 신분 확인을 진행하니, 신분증은 꼭 지참하셔야 합니다.
            <br />
            <br />
            3. 헌혈 전날 충분한 수면과 휴식, 헌혈 당일에는 가벼운 음식 섭취를
            권장합니다. (혈소판 성분 헌혈에 참여시, 당일 기름진 음식 섭취는
            피해주시기 바랍니다.)
            <br />
            <br />
            4. 복용중인 약이 있거나, 치료중인 병이 있을 경우, 헌혈 전 혈액원
            등에 먼저 문의해주시기 바랍니다.
          </Content>
        </Container>
      )}
      {page === 5 && (
        <Container>
          <Title>헌혈신청 완료</Title>
          <Content style={{ textAlign: "center", color: "#C82525" }}>
            헌혈 신청을 수락해주셔서 감사합니다!
            <br />
            당신의 헌혈로 수혈자는 희망을 얻을 수 있습니다.
            <br />
            헌혈에 꼭 참여해주시면 감사하겠습니다!
          </Content>
          <SubTitle style={{ marginTop: "30px" }}>인근 병원</SubTitle>
        </Container>
      )}
      <ButtonContainer>
        {page > 1 && (
          <Button
            style={{ background: "#707070" }}
            onClick={() => setPage((prev) => prev - 1)}
          >
            뒤로가기
          </Button>
        )}
        {page < 5 && (
          <Button
            style={{ fontFamily: "Cafe24 Ssurround" }}
            onClick={() => setPage((prev) => prev + 1)}
          >
            계속하기
          </Button>
        )}
        {page === 5 && (
          <Button
            style={{ fontFamily: "Cafe24 Ssurround" }}
            onClick={() => navigate(ROUTES_PATH_BLOOD_REQUESTS)}
          >
            확인완료
          </Button>
        )}
      </ButtonContainer>
    </ContentContainer>
  );
}
export default RequestCaution;
