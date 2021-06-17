import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

// import VideoPlayer from 'vue-video-player'
// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')
// Vue.use(VideoPlayer)

// import 'element3/lib/theme-chalk/index.css';
// import Element3 from 'element3';

import Viewer from 'v-viewer';
Vue.use(Viewer);

import Plugin from './plugin/plugin';

Vue.use(Plugin, {router, store});
// Vue.use(Element3);

router.beforeEach((to, from, next) => {
    console.log('beforeEach', to, from, next);
    next();
});

router.beforeResolve((to, from, next) => {
    console.log('beforeResolve');
    next();
});
router.afterEach((to, from) => {
    console.log('afterEach');
    // next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
