import axios from 'axios';

const Api = axios.create({
    baseURL: import.meta.env.VITE_DEPLOYED_API_URL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: false
});

Api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default Api;