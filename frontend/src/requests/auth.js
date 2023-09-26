import axios from './axios.js';


export const requestLogin = async user => axios.post(`/login`,user);
export const requestRegister = async user => axios.post(`/register`,user);
export const requestVerify = () => axios.get(`/verify`);

