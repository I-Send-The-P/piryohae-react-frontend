import axios from "axios";
import {
  POST_QUESTION,
  GET_QUESTIONS,
  PATCH_QUESTION,
  GET_QUESTION,
  GET_FAQS,
  POST_ANSWER,
  BASE_URL,
} from "constants/Api";

export const postQuestion = (id, data) => {
  return axios.post(BASE_URL + POST_QUESTION.replace("memberId", id), data);
};
export const getQuestions = (id) => {
  return axios.get(BASE_URL + GET_QUESTIONS.replace("memberId", id));
};
export const patchQuestion = (id, data) => {
  return axios.patch(
    BASE_URL + PATCH_QUESTION.replace("{questionId}", id),
    data
  );
};
export const getQuestion = (id) => {
  return axios.get(BASE_URL + GET_QUESTION.replace("{questionId}", id));
};
export const getFaqs = () => {
  return axios.get(BASE_URL + GET_FAQS);
};
export const postAnswer = (id, data) => {
  return axios.post(BASE_URL + POST_ANSWER.replace("{questionId}", id), data);
};
