import {
  BASE_URL,
  GET_ACCEPTS_STATUS_CATEGORIES,
  GET_BLOOD_DONATION_CATEGORIES,
  GET_BLOOD_TYPE_CATEGORIES,
  GET_QUESTION_TYPE_CATEGORIES,
  GET_REQUESTS_STATUS_CATEGORIES,
} from "constants/Api";
import axios from "axios";

const getAcceptsStatusCategories = () => {
  return axios.get(BASE_URL + GET_ACCEPTS_STATUS_CATEGORIES);
};
const getBloodDonationCategories = () => {
  return axios.get(BASE_URL + GET_BLOOD_DONATION_CATEGORIES);
};
const getBloodTypeCategories = () => {
  return axios.get(BASE_URL + GET_BLOOD_TYPE_CATEGORIES);
};
const getQuestionTypeCategories = () => {
  return axios.get(BASE_URL + GET_QUESTION_TYPE_CATEGORIES);
};
const getRequestsStatusCategories = () => {
  return axios.get(BASE_URL + GET_REQUESTS_STATUS_CATEGORIES);
};
