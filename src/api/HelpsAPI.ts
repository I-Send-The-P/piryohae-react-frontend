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

const PostQuestion = (id, data) => {
  return axios.post(BASE_URL + POST_QUESTION.replace("memberId", id), data);
};
const GetQuestions = (id) => {
  return axios.get(BASE_URL + GET_QUESTIONS.replace("memberId", id));
};
const PatchQuestion = (id, data) => {
  return axios.patch(
    BASE_URL + PATCH_QUESTION.replace("{questionId}", id),
    data
  );
};
const GetQuestion = (id) => {
  return axios.get(BASE_URL + GET_QUESTION.replace("{questionId}", id));
};
const GetFaqs = () => {
  return axios.get(BASE_URL + GET_FAQS);
};
const PostAnswer = (id, data) => {
  return axios.post(BASE_URL + POST_ANSWER.replace("{questionId}", id), data);
};
