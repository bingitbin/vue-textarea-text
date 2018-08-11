import Vue from 'vue'
import App from './App.vue'
//import textarea from './textarea-text'
import textarea from 'vue-textarea-text'
Vue.use(textarea);

new Vue({
  el: '#app',
  render: h => h(App)
})
