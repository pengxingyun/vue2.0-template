import urls from './common.url'
import http from '../http'

export default {
    commonGet(params) {
        return http.get(urls.commonGet, params).then(res => {
            return res;
        })
    },
    commonPost(params) {
        return http.postJson(urls.commonPost, params).then(res => {
            return res;
        })
    }
}