import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: `https://blog.wegeda.app/api/`,
    baseURL: `http://localhost:4000/api/`,

});



axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("@wegeda-token")!;

        if (accessToken) {
            if (config.headers) config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {

        return Promise.reject(error);
    }
);



axiosInstance.interceptors.response.use(
    (response) => {

        return response;
    },
    (error) => {

        return Promise.reject(error);
    }
);

export default axiosInstance;
