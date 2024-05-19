import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

const axiosHttp: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 1000*10,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosHttp.interceptors.request.use(
    (config) => {
        // config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosHttp.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

export default axiosHttp;
