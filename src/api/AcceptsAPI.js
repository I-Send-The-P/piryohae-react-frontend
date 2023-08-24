import axios from "axios";
import {
  GET_ACCEPTS_COUNT,
  GET_REQUESTS_MINE,
  GET_ACCEPTS_MINE,
  BASE_URL,
} from "constants/Api";

export const getAcceptsCount = (id) => {
  return axios.get(BASE_URL + GET_ACCEPTS_COUNT.replace("{memberId}", id));
};
export const getRequestsMine = (id) => {
  return axios.get(BASE_URL + GET_REQUESTS_MINE.replace("{memberId}", id));
};
export const getAcceptsMine = (id) => {
  return axios.get(BASE_URL + GET_ACCEPTS_MINE.replace("{memberId}", id));
};
