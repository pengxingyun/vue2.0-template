import urls from './test.url'
import http from '../http'

export default {
    testGet(params) {
        return http.get('http://localhost:8080/api', params).then(res => {
            return res;
        })
    },
    testPost(params) {
        return http.postJson(urls.testPost, params).then(res => {
            return res;
        })
    }
}