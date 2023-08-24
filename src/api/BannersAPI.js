import { BASE_URL, GET_BANNERS } from "constants/Api";
import axios from "axios";
export const getBanners = () => {
  return axios.get(BASE_URL + GET_BANNERS);
};
