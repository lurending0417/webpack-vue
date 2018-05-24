'use strict';
import VueRouter from 'vue-router';
import Vue from 'vue';
import Hello from '../components/Hello.vue'

Vue.use(VueRouter)

export default const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Hello
        }
    ]
})