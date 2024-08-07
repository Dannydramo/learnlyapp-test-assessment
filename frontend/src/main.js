import { createApp } from 'vue';
import './style.css';
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import App from './App.vue';

import axios from 'axios';
import router from './router';
import store from './store';
import { LocalStorage } from './helpers/localStorageHelper';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

router.beforeEach((to, from, next) => {
    const token = LocalStorage.getItem('auth_token');
   
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!token) {
            next({
                path: '/login',
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

const learnlyApp = createApp(App);
learnlyApp.use(store);
learnlyApp.use(Vue3Toastify, {
    autoClose: 3000,
});
learnlyApp.use(router);
learnlyApp.mount('#app');
