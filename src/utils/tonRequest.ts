import axios from "axios";

const TonRequest = axios.create({
    baseURL: import.meta.env.PROD ? 'https://toncenter.com/api/v2/' : 'https://testnet.toncenter.com/api/v2'
})
// Add a request interceptor
TonRequest.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
TonRequest.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.status === 200) {
        return response.data
    }
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default TonRequest;