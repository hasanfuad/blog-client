import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://fuadblog.herokuapp.com/api/"
})