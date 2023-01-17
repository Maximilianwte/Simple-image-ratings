import Vue from 'vue'
import Router from 'vue-router'
import front from './views/front.vue'
import variabledesc from './views/variabledesc.vue'
import application from './views/application.vue'
import imprint from './views/imprint.vue'
import dataprivacy from './views/DataPrivacy.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: front
    },
    {
      path: '/app',
      name: 'application',
      component: application
    },
    {
      path: '/variable_description',
      name: 'variabledesc',
      component: variabledesc
    },
    {
      path: '/imprint',
      name: 'imprint',
      component: imprint
    },
    {
      path: '/privacy',
      name: 'dataprivacy',
      component: dataprivacy
    },
  ]
})