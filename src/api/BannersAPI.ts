import {
  BASE_URL,
  GET_ACCEPTS_STATUS_CATEGORIES,
  GET_BLOOD_DONATION_CATEGORIES,
  GET_BLOOD_TYPE_CATEGORIES,
  GET_QUESTION_TYPE_CATEGORIES,
  GET_REQUESTS_STATUS_CATEGORIES,
} from "constants/Api";
import axios from "axios";

const GetAcceptsStatusCategories = () => {
  return axios.get(BASE_URL + GET_ACCEPTS_STATUS_CATEGORIES);
};
const GetBloodDonationCategories = () => {
  return axios.get(BASE_URL + GET_BLOOD_DONATION_CATEGORIES);
};
const GetBloodTypeCategories = () => {
  return axios.get(BASE_URL + GET_BLOOD_TYPE_CATEGORIES);
};
const GetQuestionTypeCategories = () => {
  return axios.get(BASE_URL + GET_QUESTION_TYPE_CATEGORIES);
};
const GetRequestsStatusCategories = () => {
  return axios.get(BASE_URL + GET_REQUESTS_STATUS_CATEGORIES);
};
