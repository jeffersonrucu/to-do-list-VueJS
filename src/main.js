import Vue from 'vue'
import App from './App.vue'
import Progress from './components/widgets/Progress.vue'

Vue.config.productionTip = false
Vue.component('app-progress', Progress)

new Vue({
  render: h => h(App),
}).$mount('#app')
