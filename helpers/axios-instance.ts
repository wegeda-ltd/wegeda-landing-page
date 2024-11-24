import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: `https://304f-102-88-81-99.ngrok-free.app/api/`,
    baseURL: `https://bitter-sidewalk.pipeops.app/api/`,

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
