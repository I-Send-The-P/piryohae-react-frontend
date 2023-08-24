import { ContentContainer } from "components/Content";
import { List, ListItem } from "components/List";

function Requests() {
  return (
    <ContentContainer>
      <List>
        <ListItem
          bloodType={"AB+"}
          status={true}
          title={"지정헌혈 부탁드립니다."}
          date={"2023.04.02"}
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

export default Requests;
