<template>
  <div class="container py-5">
    <h1 class="fw-bold p-5 text-center">
      Ligas de <span class="text-info">Fútbol</span>
    </h1>
    <router-link to="/equipo/:nombreEquipo" class="btn btn-outline-primary m-3">
      Buscar Equipo
    </router-link>

    <router-link to="/jugador/:nombreJugador" class="btn btn-outline-primary m-3">
      Buscar Jugador
    </router-link>
    <div class="row g-4 mt-4">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3"
        v-for="liga in ligas"
        :key="liga.nombre"
      >
        <div
          class="p-5 text-center rounded border shadow-sm liga-card"
          @click="goToLiga(liga.nombre)"
        >
          {{ liga.nombre }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getLigas } from "../service/service.js";
import { useRouter } from "vue-router";

const ligas = getLigas();
const router = useRouter();

const goToLiga = (nombre) => {
  router.push(`/liga/${encodeURIComponent(nombre)}`);
};
</script>

<style scoped>
.liga-card {
  background-color: rgba(0, 72, 255, 0.1);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.liga-card:hover {
  background-color: #03e2ff;
  color: white;
}

.liga-card {
  background-color: rgba(0, 72, 255, 0.1);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  padding: 1rem;
}
</style>
