import { ContentContainer, ContentTitle } from "components/Content";
import { List, ListItem, SubTitle } from "./styled";

function Rank() {
  return (
    <ContentContainer>
      <ContentTitle>명예의 전당</ContentTitle>
      <List>
        <ListItem title="XXX위" name="황석영" span="헌혈 총 nn회" isMine />
        <SubTitle>TOP 100</SubTitle>
        <ListItem title="XXX위" name="황석영" span="헌혈 총 nn회" />
        <ListItem title="XXX위" name="황석영" span="헌혈 총 nn회" />
        <ListItem title="XXX위" name="황석영" span="헌혈 총 nn회" />
      </List>
    </ContentContainer>
  );
}

export default Rank;
