import Vue from 'vue'
import App from './App.vue'
import Dock from './Dock.vue'
import Status from './appStatus.vue'
import Numer from './Numer.vue'
import Denumer from './Denumer.vue'
import Clock from './Clock.vue'
import groupChoose from './groupChoose.vue'
import Author from './Author.vue'
import NewsEngine from './newsEngine.vue'

Vue.component('app-dock', Dock);
Vue.component('app-status', Status);
Vue.component('app-numer', Numer);
Vue.component('app-denumer', Denumer);
Vue.component('app-clock', Clock);
Vue.component('app-group', groupChoose);
Vue.component('app-author', Author);
Vue.component('app-news', NewsEngine)

new Vue({
  el: '#app',
  render: h => h(App)
})
