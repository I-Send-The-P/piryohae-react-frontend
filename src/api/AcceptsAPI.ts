import axios from "axios";
import {
  GET_ACCEPTS_COUNT,
  GET_REQUESTS_MINE,
  GET_ACCEPTS_MINE,
  BASE_URL,
} from "constants/Api";

const getAcceptsCount = (id) => {
  return axios.get(BASE_URL + GET_ACCEPTS_COUNT.replace("{memberId}", id));
};
const getRequestsMine = (id) => {
  return axios.get(BASE_URL + GET_REQUESTS_MINE.replace("{memberId}", id));
};
const getAcceptsMine = (id) => {
  return axios.get(BASE_URL + GET_ACCEPTS_MINE.replace("{memberId}", id));
};
