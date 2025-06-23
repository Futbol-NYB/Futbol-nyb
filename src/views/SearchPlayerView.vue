<template>
  <div class="container p-5">
    <h1 class="text-center mb-5 display-5">Buscar Jugador</h1>

    <form @submit.prevent="buscarJugador" class="row justify-content-center mb-5">
      <div>
        <div class="input-group">
          <input
            v-model="nombreJugador"
            type="text"
            class="form-control"
            placeholder="Ej. Rodrigo, Lamine Yamal..."
          />
          <button class="btn btn-info text-white" type="submit">Buscar</button>
        </div>
      </div>
    </form>

    <div v-if="loading" class="text-center">
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Buscando...</span>
      </div>
      <p class="mt-2 text-secondary">Buscando...</p>
    </div>

    <div
      v-else-if="jugadores.length === 0 && busquedaRealizada"
      class="text-center text-secondary"
    >
      No se encontraron jugadores.
    </div>

    <div v-else class="row g-4">
      <div v-for="jugador in jugadores" :key="jugador.idPlayer" class="">
        <div class="card equipo-card h-100 text-center">
          <div class="card-body">
            <img
              v-if="jugador.strCutout"
              :src="jugador.strCutout"
              alt="Jugador"
              class="img-fluid mb-3"
            />
            <h5 class="card-title">{{ jugador.strPlayer }}</h5>
            <p class="card-text">
              Equipo: {{ jugador.strTeam || "N/A" }}<br />
              Posición: {{ jugador.strPosition || "Desconocida" }}<br />
              Nacionalidad: {{ jugador.strNationality || "N/A" }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { buscarJugadorPorNombre } from "../service/service.js";

const nombreJugador = ref("");
const jugadores = ref([]);
const loading = ref(false);
const busquedaRealizada = ref(false);

const buscarJugador = async () => {
  if (!nombreJugador.value.trim()) return;

  loading.value = true;
  jugadores.value = [];
  busquedaRealizada.value = false;

  jugadores.value = await buscarJugadorPorNombre(nombreJugador.value);
  loading.value = false;
  busquedaRealizada.value = true;
};
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

.card-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 0.9rem;
}
</style>
