import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
export const Axios = async ({ url, method, body, headers }) => {
    const res = await axios({
        method: method,
        url: url,
        data: body,
        headers,
    });
    return res.data;
};
