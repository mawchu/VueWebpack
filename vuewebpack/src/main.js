// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios' //主要的ajax套件
import VueAxios from 'vue-axios' //ajax轉vue的套件


Vue.use(VueAxios, axios)//需要套用才能使用
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
