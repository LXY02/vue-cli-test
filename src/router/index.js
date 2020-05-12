import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Audio from '../views/Audio'
import Matching from '../views/Matching'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Matching',
        component: Matching
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
    }
]

const router = new VueRouter({
    routes
})

export default router
