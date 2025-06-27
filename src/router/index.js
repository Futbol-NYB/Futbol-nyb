import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePageView.vue'
import LeaguesView from '../views/LeaguesView.vue'
import TeamsView from '../views/TeamsView.vue'
import SearchTeamView from '../views/SearchTeamView.vue'
import PlayersView from '../views/PlayersView.vue'
import SearchPlayerView from '../views/SearchPlayerView.vue'
import MatchsLiveView from '../views/MatchsLiveView.vue'
import TeamDetailView from '../views/TeamDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePageView,
    props: true
  },
  {
    path: '/ligas/:nombrePais',
    name: 'LigasPorPais',
    component: LeaguesView,
    props: true
},
  {
    path: '/equipos/:nombreLiga',
    name: 'EquiposPorLiga',
    component: TeamsView,
    props: true
  },
  {
    path: '/equipo/Buscar',
    name: 'BuscarEquipo',
    component: SearchTeamView
  },
  {
    path: '/jugador/Buscar',
    name: 'BuscarJugador',
    component: SearchPlayerView
  },
  {
    path: '/jugadores/:idTeam',
    name: 'Jugadores',
    component: PlayersView,
    props: true
  },
  {
    path: '/encuentros/partidosEnVido',
    name: 'Encuentros',
    component: MatchsLiveView,
    props: true
  },
  {
    path: '/equipo/:id',
    name: 'DetalleEquipo',
    component: TeamDetailView,
    props: true
  }
]



const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
