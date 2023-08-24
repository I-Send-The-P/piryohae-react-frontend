import axios from "axios";
import {
  POST_DUPLICATE_LOGINID,
  POST_DUPLICATE_NICKNAME,
  POST_DUPLICATE_PHONENUMBER,
  POST_MEMBER,
  GET_MEMBER,
  PUT_MEMBER,
  BASE_URL,
} from "constants/Api";

const PostDuplicateLoginId = (data) => {
  return axios.post(BASE_URL + POST_DUPLICATE_LOGINID, data);
};
const PostDuplicateNickName = (data) => {
  return axios.post(BASE_URL + POST_DUPLICATE_NICKNAME, data);
};
const PostDuplicatePhoneNumber = (data) => {
  return axios.post(BASE_URL + POST_DUPLICATE_PHONENUMBER, data);
};
const PostMember = (data) => {
  return axios.post(BASE_URL + POST_MEMBER, data);
};
const GetMember = (id) => {
  return axios.get(BASE_URL + GET_MEMBER.replace("{memberId}", id));
};
const PutMember = (id, data) => {
  return axios.put(BASE_URL + PUT_MEMBER.replace("{memberId}", id), data);
};
