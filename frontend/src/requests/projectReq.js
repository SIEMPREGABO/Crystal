import axios from './axios.js';


export const requestCreate = async project => axios.post(`/createProject`,project);
//export const requestRegister = async user => axios.post(`/register`,user);
export const requestProjects = () => axios.get(`/getProjects`);
//export const requestLogout = () => axios.post(`/logout`);
//export const requestReset = async user => axios.post(`/reset`,user); 

