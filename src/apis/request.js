import axios from 'axios';


const request = axios.create({
  baseURL: '/',
  timeout: 50000 // 设置默认的请求超时时间
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


// 响应拦截器
request.interceptors.response.use(
  response => {
    if (axios.isCancel(response)) {
      return Promise.reject(response);
    }
    return response.data;
  },
  error => {
    if (axios.isCancel(error)) {
      return Promise.reject({
        cancel: true
      });
    }
    return Promise.reject();
  }
);

export default request;
