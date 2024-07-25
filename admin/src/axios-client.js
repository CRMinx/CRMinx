import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://localhost',
    withCredentials: true,
});

axiosClient.interceptors.request.use(config => {
    // Retrieve the XSRF token from cookies
    const xsrfToken = document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN=')).split('=')[1];
    config.headers['X-XSRF-TOKEN'] = decodeURIComponent(xsrfToken);
    return config;
}, error => {
    return Promise.reject(error);
});

axiosClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            return Promise.reject(error.response.data);
        } else {
            return Promise.reject(error);
        }
    }
);

export default axiosClient;
