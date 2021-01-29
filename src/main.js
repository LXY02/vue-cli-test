import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// import VideoPlayer from 'vue-video-player'
// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')
// Vue.use(VideoPlayer)

import Plugin from './plugin/plugin';

Vue.use(Plugin, {router, store});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
