import axios, { Axios } from 'axios';
import dotenv from 'dotenv';

const api:Axios = axios.create({
    baseURL: 'http://'+process.env.HOST +":"+process.env.PORT ,
}) 
export default api;
