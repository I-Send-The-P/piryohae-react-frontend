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

const getRequests = () => {
  return axios.get(BASE_URL + GET_REQUESTS);
};
const getRequest = (id) => {
  return axios.get(BASE_URL + GET_REQUEST.replace("{requestId}", id));
};
const postRequest = (data: any) => {
  return axios.post(BASE_URL + POST_REQUEST, data);
};
const deleteRequest = (id) => {
  return axios.delete(BASE_URL + DELETE_REQUEST.replace("{requestId}", id));
};
const postAccept = (id) => {
  return axios.post(BASE_URL + POST_ACCEPT.replace("{requestId}", id));
};
const putComplete = (id) => {
  return axios.put(BASE_URL + PUT_COMPLETE.replace("{requestId}", id));
};
const putCancel = (id) => {
  return axios.put(BASE_URL + PUT_CANCEL.replace("{requestId}", id));
};
const getHospitals = (id) => {
  return axios.get(BASE_URL + GET_HOSPITALS.replace("{requestId}", id));
};
