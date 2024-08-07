import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/onboarding/Login.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/onboarding/Register.vue'),
    },
    {
        path: '/',
        name: 'Products',
        component: () => import('../views/product/Products.vue'),
    },
    {
        path: '/add-product',
        name: 'AddProduct',
        component: () => import('../views/product/AddProduct.vue'),
        meta: {
            requiresAuth: true,
        },
    },
];
export default createRouter({
    history: createWebHistory(),
    routes,
});
