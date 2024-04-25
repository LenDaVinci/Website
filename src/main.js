import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

import HomePage from './pages/HomePage.vue';
import TripPage from './pages/TripPage.vue';
import MessagePage from './pages/MessagePage.vue';

const routes = [
    { path: '/Website', component: HomePage },
    { path: '/Website/trip', component: TripPage },
    { path: '/Website/messages/:id', component: MessagePage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
