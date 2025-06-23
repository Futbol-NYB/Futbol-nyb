import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePageView.vue'
import LigasView from '../views/LigasView.vue'
import buscarEquipoPorNombre from '../views/SearchTeamView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePageView
  },
  {
    path: '/liga/:nombreLiga',
    name: 'Liga',
    component: LigasView,
    props: true
  },
  {path: '/equipo/:nombreEquipo',
    name: 'Equipo',
    component: buscarEquipoPorNombre,

  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
