import axios from "axios";
import {
  GET_BOARDS,
  POST_BOARD,
  GET_BOARD,
  PATCH_BOARD,
  DELETE_BOARD,
  BASE_URL,
} from "constants/Api";

const GetBoards = () => {
  return axios.get(BASE_URL + GET_BOARDS);
};
const PostBoard = (data) => {
  return axios.post(BASE_URL + POST_BOARD, data);
};
const GetBoard = (id) => {
  return axios.get(BASE_URL + GET_BOARD.replace("{boardId}", id));
};
const PatchBoard = (id, data) => {
  return axios.patch(BASE_URL + PATCH_BOARD.replace("{boardId}", id), data);
};
const DeleteBoard = (id) => {
  return axios.delete(BASE_URL + DELETE_BOARD.replace("{boardId}", id));
};
