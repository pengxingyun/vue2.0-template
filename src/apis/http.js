import ajax from './ajax'
import qs from 'qs'


export default {
    /**
     * 实现get请求接口
     * @param url 请求地址
     * @param data 请求参数
     * @param context 上下文
     * @returns 返回Promise对象
     */
    get(url, data, context) {
        return ajax.get(url, {
            params: data
        });
    },
    /**
     * 实现post请求接口, 参数方式为json
     * @param url 请求地址
     * @param data 请求参数
     * @param context 上下文
     * @returns 返回Promise对象
     */
    postJson(url, data, context) {
        return ajax.post(url, data, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
    },
    /**
     * post请求, 参数方式为FormData
     * @param url 请求地址
     * @param data 请求参数
     * @param context 上下文
     * @returns {Promise} 返回Promise对象
     */
    postFormData(url, data, context) {
        return ajax.post(url, qs.stringify(data), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        });
    }
}