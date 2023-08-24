import axios from "axios";
import {
  GET_BOARDS,
  POST_BOARD,
  GET_BOARD,
  PATCH_BOARD,
  DELETE_BOARD,
  BASE_URL,
} from "constants/Api";

const getBoards = () => {
  return axios.get(BASE_URL + GET_BOARDS);
};
const postBoard = (data) => {
  return axios.post(BASE_URL + POST_BOARD, data);
};
const getBoard = (id) => {
  return axios.get(BASE_URL + GET_BOARD.replace("{boardId}", id));
};
const patchBoard = (id, data) => {
  return axios.patch(BASE_URL + PATCH_BOARD.replace("{boardId}", id), data);
};
const deleteBoard = (id) => {
  return axios.delete(BASE_URL + DELETE_BOARD.replace("{boardId}", id));
};
