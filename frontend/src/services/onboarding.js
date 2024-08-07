import { Axios } from '../helpers/axiosHelper';
import axios from 'axios';
let status;
let message;
let data;

export const processLogin = async (payload) => {
    try {
        const response = await Axios({
            url: '/auth/login',
            method: 'post',
            body: payload,
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

export const processRegister = async (payload) => {
    try {
        const response = await Axios({
            url: '/auth/register',
            method: 'post',
            body: payload,
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
