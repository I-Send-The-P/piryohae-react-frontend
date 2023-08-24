import { BASE_URL, GET_BANNERS } from "constants/Api";
import axios from "axios";
const GetBanners = () => {
  return axios.get(BASE_URL + GET_BANNERS);
};
