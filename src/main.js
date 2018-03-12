import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import VueResource from 'vue-resource'
import moment from 'moment'
import VuePreview from 'Vue-preview'
import axios from 'axios'
 
//基于Vue的中间件
Vue.use(Mint)
Vue.use(VueResource)
Vue.use(VuePreview)

Vue.prototype.$axios = axios

//导入css
import 'mint-ui/lib/style.css'
import './statics/mui/css/mui.css'
import './statics/css/site.css'

//全局过滤器
Vue.filter('fmtDate',(input,formatString)=>{
  const lastFormatString = formatString || "YYYY-MM-DD HH:mm:ss"

  return moment(input).format(lastFormatString)
})

//导入路由对象
import router from './routers/routers.js'

//导入vuex
import store from './vuex/store.js'


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
