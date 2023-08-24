import { getRequests } from "api/RequestsAPI";
import { ContentContainer } from "components/Content";
import { List, ListItem } from "components/List";
import { useEffect } from "react";
import { useState } from "react";
import {
  getBloodTypeCategories,
  getRequestsStatusCategories,
} from "api/CategoriesAPI";

function Requests() {
  const [requests, setRequests] = useState([]);
  const [bloodTypes, setBloodTypes] = useState([]);
  const [requestStatuses, setRequestStatuses] = useState([]);
  useEffect(() => {
    getRequests().then((res) => setRequests(res.data.content));
    getBloodTypeCategories().then((res) => setBloodTypes(res.data));
    getRequestsStatusCategories().then((res) => setRequestStatuses(res.data));
  }, []);
  return (
    <ContentContainer>
      <List>
        {requests?.map((request) => (
          <ListItem
            key={request.id}
            bloodType={
              bloodTypes.find((v) => v.id === request.bloodTypeId).bloodType
            }
            status={
              requestStatuses.find((v) => v.id === request.requestStatusId)
                .requestStatus
            }
            title={request.title}
            date={new Date(request.createdTime).toLocaleDateString()}
          ></ListItem>
        ))}
      </List>
    </ContentContainer>
  );
}

export default Requests;
