import { ContentContainer } from "components/Content";
import { TextInput } from "components/Input";
import { LeftTitle } from "pages/Signup/styled";
import { Switch, SwitchButton } from "./styled";
import { useState } from "react";
import { List, ListItem } from "components/List";

function BloodInfo() {
  const [isRequest, setIsRequest] = useState(true);
  return (
    <ContentContainer style={{ padding: "0" }}>
      <LeftTitle>나의 헌혈횟수</LeftTitle>
      <TextInput placeholder="PW를 입력하세요" value={3} disabled></TextInput>
      <LeftTitle>나의 헌혈</LeftTitle>
      <Switch>
        <SwitchButton checked={isRequest} onClick={() => setIsRequest(true)}>
          내가 작성한
        </SwitchButton>
        <SwitchButton checked={!isRequest} onClick={() => setIsRequest(false)}>
          내가 수락한
        </SwitchButton>
      </Switch>
      <List>
        <ListItem
          bloodType={"AB+"}
          status={true}
          title={"지정헌혈 부탁드립니다."}
          date={"2023.04.02"}
          content={
            "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          }
        ></ListItem>
        <ListItem
          bloodType={"B+"}
          status={false}
          title={"지정헌혈 부탁드립니다."}
          date={"2023.04.02"}
        ></ListItem>
      </List>
    </ContentContainer>
  );
}
export default BloodInfo;
