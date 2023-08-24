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

const postQuestion = (id, data) => {
  return axios.post(BASE_URL + POST_QUESTION.replace("memberId", id), data);
};
const getQuestions = (id) => {
  return axios.get(BASE_URL + GET_QUESTIONS.replace("memberId", id));
};
const patchQuestion = (id, data) => {
  return axios.patch(
    BASE_URL + PATCH_QUESTION.replace("{questionId}", id),
    data
  );
};
const getQuestion = (id) => {
  return axios.get(BASE_URL + GET_QUESTION.replace("{questionId}", id));
};
const getFaqs = () => {
  return axios.get(BASE_URL + GET_FAQS);
};
const postAnswer = (id, data) => {
  return axios.post(BASE_URL + POST_ANSWER.replace("{questionId}", id), data);
};
