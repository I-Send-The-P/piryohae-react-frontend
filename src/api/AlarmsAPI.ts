import axios from "axios";
import { BASE_URL, GET_ALARMS, PUT_ALARM } from "constants/Api";

const GetAlarms = (id) => {
  return axios.get(BASE_URL + GET_ALARMS.replace("{memberId}", id));
};
const PutAlarm = (id) => {
  return axios.put(BASE_URL + PUT_ALARM.replace("{memberId}", id));
};
