<template>
  <div class="container p-5">
    <h2 class="display-5 text-center mb-4">
      Jugadores del <span class="text-info">{{ nombreEquipo || "equipo" }}</span>
    </h2>

    <div v-if="loading" class="text-center m-4">
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt-3">Cargando jugadores...</p>
    </div>

    <div v-else-if="jugadores.length === 0" class="text-center text-muted">
      No se encontraron jugadores.
    </div>

    <div v-else class="row g-4 mt-4">
      <div
        v-for="jugador in jugadores"
        :key="jugador.idPlayer"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <div class="card h-100 text-center img-player">
          <div
            class="card-body d-flex flex-column align-items-center justify-content-center"
          >
            <img
              :src="jugador.strCutout || jugador.strThumb"
              alt="Jugador"
              class="img-fluid mb-3"
              style="max-height: 100px"
            />
            <h5 class="card-title">{{ jugador.strPlayer }}</h5>
            <p class="card-text text-muted small">
              Posición: {{ jugador.strPosition || "N/A" }} <br />
              Nacionalidad: {{ jugador.strNationality || "N/A" }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getJugadorPorEquipo } from "../service/service.js";
import { useRoute } from "vue-router";

const route = useRoute();
const idTeam = route.params.idTeam;

const jugadores = ref([]);
const loading = ref(true);
const nombreEquipo = ref("");

const cargarJugadores = async () => {
  loading.value = true;
  jugadores.value = await getJugadorPorEquipo(idTeam);
  if (jugadores.value.length > 0) {
    nombreEquipo.value = jugadores.value[0].strTeam;
  }
  loading.value = false;
};

onMounted(() => {
  cargarJugadores();
});
</script>

<style>
.img-player {
  background-color: rgba(0, 72, 255, 0.1);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}
.img-player:hover {
  background-color: #03e2ff;
  color: white;
}
</style>
