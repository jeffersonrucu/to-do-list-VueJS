import Vue from 'vue'
import App from './App.vue'
import Progress from './components/widgets/Progress.vue'
import BarAdd from './components/widgets/BarAdd.vue'

Vue.config.productionTip = false
Vue.component('app-progress', Progress)
Vue.component('app-bar-add', BarAdd)


new Vue({
  render: h => h(App),
}).$mount('#app')
