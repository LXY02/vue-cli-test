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
        redirect: '/about'
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
        name: 'Model Test',
        component: () => import('../views/model-test/ModelTest.vue')
    },
    {
        path: '/href-test',
        name: 'Href Test',
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
    },
    {
        path: '/video-test',
        name: 'VideoTest',
        component: () => import('../views/video/video-test.vue')
    },
    {
        path: '/inner-scroll',
        name: 'InnerScroll',
        component: () => import('../views/inner-scroll.vue')
    },
    {
        path: '/drawer-test',
        name: 'DrawerTest',
        component: () => import('../views/drawer-test/drawer-test.vue')
    },
    {
        path: '/antv',
        name: 'Antv',
        component: () => import('../views/antv'),
        children: [
            {
                name: 'Antv G6',
                path: '/antv/g6',
                component: () => import('../views/antv/component/antv-g6.vue')
            },
            {
                name: 'Antv Basic',
                path: '/antv/basic',
                component: () => import('../views/antv/component/basic.vue')
            },
            {
                name: 'Antv Dynamic Loading Data',
                path: '/antv/dynamic-loading-data',
                component: () => import('../views/antv/component/dynamic-loading-data.vue')
            },
            {
                name: 'Antv Behavior Test',
                path: '/antv/behavior-test',
                component: () => import('../views/antv/component/behavior-test.vue')
            },
            {
                name: 'Antv File Tree',
                path: '/antv/file-tree',
                component: () => import('../views/antv/component/file-tree/file-tree.vue')
            },
            {
                name: 'Antv Customer',
                path: '/antv/customer',
                component: () => import('../views/antv/component/customer/customer.vue')
            },
            {
                name: 'Antv Customer Loading',
                path: '/antv/customer-dynamic-loading',
                component: () => import('../views/antv/component/customer-dynamic-loading.vue')
            }
        ]
    },
    {
        path: '/selector',
        name: 'selector',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/css-selector.vue')
    },
    {
        path: '/validator',
        name: 'Validator',
        component: () => import('../views/props-validator/props-validator.vue')
    },
    {
        path: '/render-test',
        name: 'Render Test',
        component: () => import('../views/render-test/render-test.vue')
    },
    {
        path: '/modal-test',
        name: 'Modal Test',
        component: () => import('../views/modal-test/modal-test.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
