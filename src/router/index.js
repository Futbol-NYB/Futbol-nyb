import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePageView.vue'
import TeamsView from '../views/TeamsView.vue'
import SearchTeamView from '../views/SearchTeamView.vue'
import PlayersView from '../views/PlayersView.vue'
import SearchPlayerView from '../views/SearchPlayerView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePageView
  },
  {
    path: '/liga/:nombreLiga',
    name: 'Liga',
    component: TeamsView,
    props: true
  },
  {
    path: '/equipo/:nombreEquipo',
    name: 'Equipo',
    component: SearchTeamView,
    props: true
  },
  {
    path: '/jugador/:nombreJugador',
    name: 'Jugador',
    component: SearchPlayerView,
    props: true

  },
  {
    path: '/jugadores/:idTeam',
    name: 'Jugadores',
    component: PlayersView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
