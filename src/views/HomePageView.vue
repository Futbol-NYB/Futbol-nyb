<template>
  <div class="container">
    <router-link to="/equipo/:nombreEquipo">Buscar Equipo</router-link>
    <div class="p-3">
      <h1 id="tittle" class="font-bold mb-4">
        Ligas de <span class="text-info">Fútbol</span>
      </h1>
      <div class="row">
        <ul>
          <li
            v-for="liga in ligas"
            :key="liga.nombre"
            @click="goToLiga(liga.nombre)"
            id="liga"
          >
            {{ liga.nombre }}
          </li>
        </ul>
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
#liga {
  background-color: rgba(0, 72, 255, 0.7);
  position: relative;
  padding: 100px;
  text-align: center;
  margin: 10px;
  cursor: pointer;
  border-radius: 15px;
}

#liga:hover {
  background-color: #03e2ff;
  color: white;
}

#tittle {
  padding: 50px;
}
</style>
