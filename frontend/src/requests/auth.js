import axios from 'axios';

const back = "http://localhost:4000/api"

export const requestLogin = async user => axios.post(`${back}/login`,user);
export const requestRegister = async user => axios.post(`${back}/register`,user);

