import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import store from './store'
import AppButton from './components/AppButton'

import Unicon from 'vue-unicons'
import { uniTimes, uniTrash, uniCommentAlt } from 'vue-unicons/src/icons'

Unicon.add([uniTimes, uniTrash, uniCommentAlt])
Vue.use(Unicon)

Vue.component('AppButton', AppButton)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
