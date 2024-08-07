import axios from 'axios';
import { LocalStorage } from './localStorageHelper';
const token = LocalStorage.getItem('auth_token');

export const Axios = async ({ url, method, body }) => {
    if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    const res = await axios({
        method: method,
        url: url,
        data: body,
    });
    return res.data;
};
