import axios from 'axios'

let instance = axios.create({
  /*baseURL: $conf.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  }*/
});

// 拦截器
instance.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});
instance.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  if (error.response) {
    // 请求已发送，服务器回复状态码在2xx之外
    console.error(error.response);
  } else if (error.request) {
    // 请求已发送，但没有收到回应
    console.error(error.request);
  } else {
    // 请求的某些设置引发的问题
    console.error(error.message);
  }
  return Promise.reject(error);
});

export default instance