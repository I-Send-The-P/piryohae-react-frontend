import axios from "axios";
import {
  GET_ACCEPTS_COUNT,
  GET_REQUESTS_MINE,
  GET_ACCEPTS_MINE,
  BASE_URL,
} from "constants/Api";

const GetAcceptsCount = (id) => {
  return axios.get(BASE_URL + GET_ACCEPTS_COUNT.replace("{memberId}", id));
};
const GetRequestsMine = (id) => {
  return axios.get(BASE_URL + GET_REQUESTS_MINE.replace("{memberId}", id));
};
const GetAcceptsMine = (id) => {
  return axios.get(BASE_URL + GET_ACCEPTS_MINE.replace("{memberId}", id));
};
