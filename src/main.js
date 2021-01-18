import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-light.css'
import router from './router'


Vue.use(VueMaterial)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')