import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Layout from '@/views/Layout'

Vue.use(VueRouter);


const routes = [
    {
        path: "*",
        redirect: "/login",
    }, {
        path: "",
        redirect: "/login",
    }, {
        path: "/login",
        component: Login
    }, {
        path: "/register",
        component: () => import('@/views/register'),
        meta: {
            loginRequire: false,
        },
    }, {
        path: '/',
        name: '首页',
        component: Layout,
    }, {
        path: "/",
        name: "首页",
        component: Layout,
        meta: {
            loginRequire: true,
        },
        children: [
            {
                path: "index",
                name: "首页",
                component: () => import('@/views/Home'),
                //redirect: "/ftype/list",
            }, {
                path: "users",
                name: "users",
                component: () => import('@/views/users/index'),
                redirect: "/users/list",
                children: [{
                    path: "add",
                    component: () => import('@/views/users/add'),
                }, {
                    path: "update",
                    component: () => import('@/views/users/update'),
                }, {
                    path: "list",
                    component: () => import('@/views/users/list'),
                }, {
                    path: "info",
                    component: () => import('@/views/users/info'),
                },
                ],
            }, {
                path: "contacts",
                component: () => import('@/views/contacts/index'),
                redirect: "/contacts/list",
                children: [{
                    path: "add",
                    component: () => import('@/views/contacts/add'),
                },
                    {
                        path: "update",
                        component: () => import('@/views/contacts/update'),
                    },
                    {
                        path: "list",
                        component: () => import('@/views/contacts/list'),
                    },
                ],
            },
        ],
    },

];

const router = new VueRouter({
    //默认是访问任何地址都是首页，加上这个可以访问单个地址
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router
