import axios from "axios";
import {
  BASE_URL,
  DELETE_REQUEST,
  GET_REQUEST,
  GET_REQUESTS,
  POST_ACCEPT,
  POST_REQUEST,
  PUT_COMPLETE,
  PUT_CANCEL,
  GET_HOSPITALS,
} from "constants/Api";

const GetRequests = () => {
  return axios.get(BASE_URL + GET_REQUESTS);
};
const GetRequest = (id) => {
  return axios.get(BASE_URL + GET_REQUEST.replace("{requestId}", id));
};
const PostRequest = (data: any) => {
  return axios.post(BASE_URL + POST_REQUEST, data);
};
const DeleteRequest = (id) => {
  return axios.delete(BASE_URL + DELETE_REQUEST.replace("{requestId}", id));
};
const PostAccept = (id) => {
  return axios.post(BASE_URL + POST_ACCEPT.replace("{requestId}", id));
};
const PutComplete = (id) => {
  return axios.put(BASE_URL + PUT_COMPLETE.replace("{requestId}", id));
};
const PutCancel = (id) => {
  return axios.put(BASE_URL + PUT_CANCEL.replace("{requestId}", id));
};
const GetHospitals = (id) => {
  return axios.get(BASE_URL + GET_HOSPITALS.replace("{requestId}", id));
};
