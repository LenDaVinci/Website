import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

import HomePage from './pages/HomePage.vue';
import TripPage from './pages/TripPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/trip', component: TripPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
