import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: import('../../views/Home.vue'),
    },
    {
        path: '/request-api/global',
        name: 'request_api_global',
        component: import('../../views/request-api/global.vue'),
    }, {
        path: '/request-api/require',
        name: 'request_api_require',
        component: import('../../views/request-api/require.vue'),
    },
    // {
    //     path: '*',
    //     redirect: '/',
    // }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;