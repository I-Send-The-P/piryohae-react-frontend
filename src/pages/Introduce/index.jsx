import { ContentContainer } from "components/Content";
import { Logo, Content, Bold } from "./styled";

function Introduce() {
  return (
    <ContentContainer>
      <Logo src="/png/logo.png" />
      <Content>
        <Bold>우리는 모두 ‘가뭄에 뿌려지는 단비’가 될 수 있습니다.</Bold>
        <br />
        <br />
        지인, 가족이 피가 필요한 상황에서, 보호자들은 지정 헌혈을 마땅히 요청할
        곳이 없어, 익명 게시판과 같은 곳에 글을 올리고 무수히 기다리기만을
        반복할 뿐입니다. 그들이 기다리는 시간이 길어질수록, 정신적 ⦁ 신체적으로
        말라갑니다. 저희 서비스는 이런 문제점에 착안하여,{" "}
        <Bold>
          헌혈자와 수혈자를 매칭시킨 후, 지정 헌혈이 더 활발하게 일어나도록
          하고, 보호자들에게 단비를 내려주는 것이 목표입니다.
        </Bold>
        <br />
        <br />
        정해진 규격에 맞게 헌혈을 요청하면, 환자와 같은 혈액형을 가지고 있으며,
        환자의 병원 근처에 거주하는 사용자들에게 웹 내 알림과 문자를 전송하며,
        요청 리스트에 게시글 형식으로 기재되어,
        <Bold>
          모든 사용자들이 내용을 확인하고 헌혈을 진행할 수 있도록 합니다.
        </Bold>
        사용자들은 이 알림으로 간단한 사연과 자신의 거주지 근처의 헌혈의 집을
        확인할 수 있습니다. 또한, 이 알림을 보지 못했더라도, 웹 내 알림
        페이지에서 자신에게 온 알림 내용을 확인할 수 있으며, 이에 대해 수락
        여부를 결정할 수 있습니다. 지정 헌혈을 진행하면, 혈액의 집에서 헌혈
        증서와 준비된 감사 선물을 받을 수 있으며, 웹 내 마이페이지의 헌혈 횟수가
        누적됩니다. 누적된 헌혈 횟수를 기반으로 선정된 Top 100은 명예의 전당에
        등재되며, 자신의 헌혈 횟수를 다른 사용자들과 비교할 수 있습니다.
        <br />
        <br />
        가뭄으로 땅이 굳어지고, 농작물이 말라갈 때, 내리는 단비가 귀한 만큼,
        <Bold>
          수혈자들에게 지정 헌혈은 매우 귀중하며, 그들의 인생이 달라질 수
          있습니다.
        </Bold>
        또한, 누구든지 사고나 질병으로 인해, 위급한 상황이 발생할 수 있는 만큼,
        조금 더 공동체적인 생각을 가지고 지금 이 시간에도 말라가고 있는
        <Bold>타인들에게 단비를 내려주는 존재가 될 수 있습니다.</Bold>
      </Content>
    </ContentContainer>
  );
}
export default Introduce;
