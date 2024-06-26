import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from './views/HomePage.vue'
import AboutPage from './views/AboutPage.vue'
import ThankYouPage from './views/ThankYouPage.vue'
import ShoppingBag from './views/ShoppingBag.vue'
import CheckoutPage from './views/CheckoutPage.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomePage,
      path: '/'
    },
    {
      component: AboutPage,
      path: '/about'
    },
    {
      component: ThankYouPage,
      path: '/thankyounotes'
    },
    {
      component: ShoppingBag,
      path: '/shoppingbag'
    },
    {
      component: CheckoutPage,
      path: '/checkout'
    }
  ]
})
