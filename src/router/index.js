import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Audio from '../views/Audio'
// import Matching from '../views/Matching'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Matching',
        redirect: '/scale-scroll'
        // component: Matching
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/model-test',
        name: 'ModelTest',
        component: () => import('../views/ModelTest.vue')
    },
    {
        path: '/href-test',
        name: 'ModelTest',
        component: () => import('../views/href-test/href-test.vue')
    },
    {
        path: '/news-carousel',
        name: 'NewsCarousel',
        component: () => import('../views/news-carousel.vue')
    },
    {
        path: '/nav-skew',
        name: 'NavSkew',
        component: () => import('../views/nav-skew.vue')
    },
    {
        path: '/mixin-test',
        name: 'MixinTest',
        component: () => import('../views/mixin-test.vue')
    },
    {
        path: '/emit-on',
        name: 'EmitOn',
        component: () => import('../views/emit-on/emit-on.vue')
    },
    {
        path: '/img-test',
        name: 'ImgTest',
        component: () => import('../views/img-test.vue')
    },
    {
        path: '/cs-ruler',
        name: 'CsRuler',
        component: () => import('../views/cs-ruler.vue')
    },
    {
        path: '/iframe-test',
        name: 'IframeTest',
        component: () => import('../views/iframe-test.vue')
    },
    {
        path: '/module-test',
        name: 'ModuleTest',
        component: () => import('../views/module-test/module-test.vue')
    },
    {
        path: '/mutation-test',
        name: 'MutationTest',
        component: () => import('../views/mutation-test.vue')
    },
    {
        path: '/scale-scroll',
        name: 'ScaleScroll',
        component: () => import('../views/scale-scroll.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
