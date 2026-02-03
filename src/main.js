import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Views
import Home from './views/Home.vue'
import ThankYou from './views/ThankYou.vue'
import SoldOut from './views/SoldOut.vue'

// Router configuration
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/obrigado', name: 'ThankYou', component: ThankYou },
  { path: '/esgotado', name: 'SoldOut', component: SoldOut },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

const app = createApp(App)
app.use(router)
app.mount('#app')
