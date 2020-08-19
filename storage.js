import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function initCom(comList) {
  let obj = {};
  comList.forEach((item, i) => {
    obj[item.name] = item.com;
  });
  return {
      state: obj
  };
}
function initApi(apiList) {
  let res = {};
  apiList.forEach((item) => {
    let value = {
      state: item['api']
    };
    res[item['namespace']] = value;
  })
  return res;
}
function initStore(storeList) {
  let res = {};
  storeList.forEach((item) => {
    let value = {
      state: item['store']
    };
    res[item['namespace']] = value;
  })
  return res;
}
let constructor = (storeConf, apiConf, comConfig) => {
  return new Vuex.Store({
      modules: {
          store: {
              modules: initStore(storeConf) 
          },
          api: {
              modules: initApi(apiConf) // 通过 this.api(namespace).getxxx(params) 形式访问
          },
          com: initCom(comConfig)
      }
  });
};
export default constructor;
