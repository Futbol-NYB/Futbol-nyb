<template>
  <div class="container">
    <h1 class="text-center mb-5 display-5">Buscar Equipo</h1>

    <form @submit.prevent="buscarEquipo" class="row justify-content-center mb-5">
      <div class="col-md-6">
        <div class="input-group">
          <input
            v-model="nombreEquipo"
            type="text"
            class="form-control"
            placeholder="Ej. Arsenal, Real Madrid..."
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
      v-else-if="equipos.length === 0 && busquedaRealizada"
      class="text-center text-secondary"
    >
      No se encontraron equipos.
    </div>

    <div v-else class="row g-4">
      <div
        v-for="equipo in equipos"
        :key="equipo.idTeam"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <div class="card equipo-card text-center h-100">
          <div class="card-body">
            <img
              :src="equipo.strTeamBadge"
              alt="Escudo"
              class="img-fluid mb-3"
              style="max-height: 80px"
            />
            <h5 class="card-title">{{ equipo.strTeam }}</h5>
            <p class="card-text">
              Fundación: {{ equipo.intFormedYear || "Desconocida" }}<br />
              Ubicación: {{ equipo.strLocation || "N/A" }}<br />
              <small class="text-muted">{{ equipo.strLeague }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { buscarEquipoPorNombre } from "../service/service.js";

const nombreEquipo = ref("");
const equipos = ref([]);
const loading = ref(false);
const busquedaRealizada = ref(false);

const buscarEquipo = async () => {
  if (!nombreEquipo.value.trim()) return;

  loading.value = true;
  equipos.value = [];
  busquedaRealizada.value = false;

  equipos.value = await buscarEquipoPorNombre(nombreEquipo.value);
  loading.value = false;
  busquedaRealizada.value = true;
};
</script>

<style scoped>
.equipo-card {
  background-color: rgba(0, 72, 255, 0.7);
  border-radius: 12px;
  transition: transform 0.2s ease, background-color 0.2s ease;
}
.equipo-card:hover {
  background-color: #03e2ff;
  color: white;
  transform: scale(1.05);
}
</style>
