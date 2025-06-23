<template>
  <div class="container">
    <h2 class="text-center m-5 display-5">
      Equipos de <span class="text-info">{{ nombreLiga }}</span>
    </h2>

    <div v-if="loading" class="text-center">
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt-3">Cargando equipos...</p>
    </div>

    <div v-else class="row g-4">
      <div v-for="equipo in equipos" :key="equipo.idTeam" class="col-6 col-md-4 col-lg-3">
        <div class="card h-100 text-center equipo-card">
          <div class="card-body">
            <img :src="equipo.strTeamBadge" alt="Escudo" class="img-fluid mb-3" />
            <h5 class="card-title">{{ equipo.strTeam }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { getEquiposPorNombreLiga } from "../service/service.js";

const props = defineProps({
  nombreLiga: String,
});

const equipos = ref([]);
const loading = ref(true);

const cargarEquipos = async (nombreLiga) => {
  loading.value = true;
  equipos.value = await getEquiposPorNombreLiga(nombreLiga);
  loading.value = false;
};

onMounted(() => {
  cargarEquipos(props.nombreLiga);
});

watch(
  () => props.nombreLiga,
  (nuevoValor) => {
    cargarEquipos(nuevoValor);
  }
);
</script>

<style scoped>
.equipo-card {
  background-color: rgba(0, 72, 255, 0.7);
  border-radius: 12px;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.equipo-card:hover {
  transform: scale(1.05);
  background-color: #03e2ff;
  color: white;
  cursor: pointer;
}
</style>
