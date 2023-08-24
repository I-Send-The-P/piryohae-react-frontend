import axios from "axios";
import { BASE_URL, GET_ALARMS, PUT_ALARM } from "constants/Api";

const getAlarms = (id) => {
  return axios.get(BASE_URL + GET_ALARMS.replace("{memberId}", id));
};
const putAlarm = (id) => {
  return axios.put(BASE_URL + PUT_ALARM.replace("{memberId}", id));
};
