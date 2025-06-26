<!-- src/views/LeaguesView.vue -->
<template>
  <div class="container py-5">
    <h1 class="text-center mb-5 display-5">
      Ligas en <span class="text-info">{{ nombrePais }}</span>
    </h1>

    <div class="row g-4">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3"
        v-for="liga in ligas"
        :key="liga.idLeague"
      >
        <div
          class="p-4 text-center rounded border shadow-sm liga-card"
          @click="goToLiga(liga.strLeague)"
        >
          {{ liga.strLeague }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getLigasPorPais } from "../service/service.js";

const route = useRoute();
const router = useRouter();
const nombrePais = route.params.nombrePais;
const ligas = ref([]);

const goToLiga = (nombreLiga) => {
  router.push(`/liga/${encodeURIComponent(nombreLiga)}`);
};

onMounted(async () => {
  ligas.value = await getLigasPorPais(nombrePais);
});
</script>

<style scoped>
.liga-card {
  background-color: rgba(0, 72, 255, 0.1);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
}
.liga-card:hover {
  background-color: #03e2ff;
  color: white;
}
</style>
