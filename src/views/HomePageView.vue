<template>
  <router-link to="/equipo/:nombreEquipo">Buscar Equipo</router-link>

  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4 text-center">Ligas de Fútbol</h1>
    <ul class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <li
        v-for="liga in ligas"
        :key="liga.nombre"
        @click="goToLiga(liga.nombre)"
        class="cursor-pointer p-4 bg-blue-100 hover:bg-blue-200 rounded text-center"
      >
        {{ liga.nombre }}
      </li>
    </ul>
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
