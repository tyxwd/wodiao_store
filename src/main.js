import Vue from 'vue'
import App from './App.vue'
import router from "./router";

Vue.config.productionTip = false

//建立事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')


