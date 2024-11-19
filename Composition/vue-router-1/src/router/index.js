import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    /*
        POKEMONES
    */
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('../views/PokemonsView.vue'),
    },
    {
      path: '/pokemons/:name',
      name: 'pokemon',
      component: () => import('../views/UnPokemonView.vue'),
    },
    {
      path: '/pokemons-favoritos',
      name: 'favoritos',
      component: () => import('../views/PokemonFavoritoView.vue'),
    },
  ],
})

export default router
