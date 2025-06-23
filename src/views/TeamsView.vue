<template>
  <div class="container p-5">
    <h2 class="display-5 text-center mb-4">
      Equipos de <span class="text-info">{{ nombreLiga }}</span>
    </h2>

    <router-link to="/equipo/Buscar" class="btn btn-outline-primary mb-4">
      Buscar Equipo
    </router-link>

    <div v-if="loading" class="text-center m-4">
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt-3">Cargando equipos...</p>
    </div>

    <div v-else class="row g-4 mt-4">
      <div v-for="equipo in equipos" :key="equipo.idTeam" class="col-6 col-md-4 col-lg-3">
        <div
          class="card h-100 text-center equipo-card"
          @click="goToJugadores(equipo.idTeam)"
        >
          <div
            class="card-body d-flex flex-column align-items-center justify-content-center"
          >
            <img
              :src="equipo.strTeamBadge || equipo.strBadge"
              alt="Escudo"
              class="img-fluid mb-3"
              style="max-height: 80px"
            />
            <h5 class="card-title text-truncate w-100">{{ equipo.strTeam }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { getEquiposPorNombreLiga } from "../service/service.js";

const props = defineProps({
  nombreLiga: String,
});

const router = useRouter();
const equipos = ref([]);
const loading = ref(true);

const goToJugadores = (id) => {
  router.push(`/jugadores/${id}`);
};

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
  background-color: rgba(0, 72, 255, 0.1);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.equipo-card:hover {
  background-color: #03e2ff;
  color: white;
}
</style>
