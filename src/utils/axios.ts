import axios from 'axios';
// import {enqueueSnackbar} from 'notistack';
// import {errorNotificationOptions, successNotificationOptions} from '../config';

// const axiosServices = axios.create({baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api/'});
const axiosServices = axios.create({baseURL: 'http://localhost:3000/api/'});
// const axiosServices = axios.create({ baseURL: 'https://gautamstudio.com/api/' });

// ==============================|| AXIOS - FOR MOCK SERVICES ||============================== //

axiosServices.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401 && !window.location.href.includes('/login')) {
            // window.location = '/login';
        }
        return Promise.reject((error.response && error.response.data) || 'Wrong Services');
    }
);

export const axiosGet = async (url: string, params = {}) => {
    try {
        // return await axiosServices.get(url, {params});
        let str = params.value;
        return [{name: `The ${str} Redemption`, id: "g91796"}];
    } catch (error) {
        console.log("Error=" + error)
    }
};

export const axiosPost = async (url: string, data = {}) => {
    try {
        // return await axiosServices.post(url, data);
        return await [{name: "hi", id: "myId"}, data]
    } catch (error) {
        console.log("Error=" + error)
    }
};

export const axiosPatch = async (url: string, data = {}) => {
    try {
        return await axiosServices.patch(url, data);
    } catch (error) {
        console.log("Error=" + error)
    }
};

export const axiosDelete = async (url: string, data = {}) => {
    try {
        return await axiosServices.delete(url, data);
    } catch (error) {
        console.log("Error=" + error)
    }
};

export const axiosTreatmentPost = async (url: string, data = {}, uploadUrl: string, formData: any) => {
    try {
        await axiosServices
            .post(url, data)
            .then((response) => console.log("Answered saved successfully" + response))
            .catch((error) => console.log("Error=" + error));

        await axiosServices
            .post(uploadUrl, formData)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => console.log("Error=" + error));
    } catch (error) {
        console.log("Error=" + error)
    }
};

export default axiosServices;
