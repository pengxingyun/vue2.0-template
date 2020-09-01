import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './apis/api.index'
import store from './stores/store.index'
import storage from '../storage'
import alert from './components/v-alert'
import toast from './components/v-toast'

let components = [
  { name: 'alert', com: new alert() },
  { name: 'toast', com: new toast() }
]
Vue.config.productionTip = false

new Vue({
  router,
  store: new storage(store, api, components), // components是全局组件只会执行一次
  render: h => h(App)
}).$mount('#app')
