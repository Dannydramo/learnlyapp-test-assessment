import { Axios } from '../helpers/axiosHelper';
import { LocalStorage } from '../helpers/localStorageHelper';

let status;
let message;
let data;

export const addProduct = async (payload) => {
    const token = LocalStorage.getItem('auth_token');
    try {
        const response = await Axios({
            url: '/product/new',
            method: 'post',
            body: payload,
            headers:{
                Authorization: `Bearer ${token}`
            }
        });

        status = 200;
        message = response.message;
        data = response.data;
    } catch (err) {
        console.log(err);
        status = err.response.status;
        message = err.response.data.message;
    }
    return { status, message, data };
};

export const getProducts = async () => {
    try {
        const response = await Axios({
            url: '/product',
            method: 'get',
        });

        status = 200;
        message = response.message;
        data = response.data;
    } catch (err) {
        console.log(err);
        status = err.response.status;
        message = err.response.data.message;
    }
    return { status, message, data };
};
