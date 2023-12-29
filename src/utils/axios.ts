import axios from 'axios';


const axiosServices = axios.create({baseURL: 'http://localhost:3000/api/'});
// const axiosServices = axios.create({ baseURL: 'http://localhost:3000/api/' });
// const axiosServices = axios.create({ baseURL: 'https://gautamstudio.com/api/' });

// ==============================|| AXIOS - FOR MOCK SERVICES ||============================== //

axiosServices.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401 && !window.location.href.includes('/login')) {
            window.location = '/login';
        }
        return Promise.reject((error.response && error.response.data) || 'Wrong Services');
    }
);


export const axiosPost = async (url, data = {}) => {
    try {
        console.log("inside axiosPost data =" + data)
        return await axiosServices.post(url, data);
    } catch (error) {
        console.log("CATCH ERROR")
    }
};

export default axiosServices;
