import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import LwnNPMProject from 'lwn-npm-project'
import App from './App.vue'

Vue.use(ElementUI)
Vue.use(LwnNPMProject)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
