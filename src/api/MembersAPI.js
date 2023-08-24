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

export const postDuplicateLoginId = (data) => {
  return axios.post(
    BASE_URL + POST_DUPLICATE_LOGINID.replace("{loginId}", data)
  );
};
export const postDuplicateNickName = (data) => {
  return axios.post(
    BASE_URL + POST_DUPLICATE_NICKNAME.replace("{nickname}", data)
  );
};
export const postDuplicatePhoneNumber = (data) => {
  return axios.post(
    BASE_URL + POST_DUPLICATE_PHONENUMBER.replace("{phoneNumber}", data)
  );
};
export const postMember = (data) => {
  return axios.post(BASE_URL + POST_MEMBER, data);
};
export const getMember = (id) => {
  return axios.get(BASE_URL + GET_MEMBER.replace("{memberId}", id));
};
export const putMember = (id, data) => {
  return axios.put(BASE_URL + PUT_MEMBER.replace("{memberId}", id), data);
};
