import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
    { 
      path: '/', 
      component: () => import(/* webpackChunName: "ListPage" */'../modules/pokemon/pages/ListPage')  
    },
    { 
      path: '/about', 
      
      component: () => import(/* webpackChunName: "AboutPage" */ '../modules/pokemon/pages/AboutPage')  
    },
    { 
      path: '/id', 
      component: () => import( /* webpackChunName: "PokemonPage" */'../modules/pokemon/pages/PokemonPage')  
    },
    { 
      path: '/:pathMatch(.*)*', 
      component:() => import(/* webpackChunName: "NoPageFound" */'../modules/shared/pages/NoPageFound')   
    },

  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router