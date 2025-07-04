<template>
  <div class="container p-5">
    <h1 class="text-center mb-5 display-5">Buscar Equipo</h1>

    <form @submit.prevent="buscarEquipo" class="row justify-content-center mb-5">
      <div>
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

    <div v-else class="row g-4 card-">
      <div v-for="equipo in equipos" :key="equipo.idTeam" class="">
        <div class="equipo-card" @click="goToDetailTeam(equipo.idTeam)">
          <div
            class="d-flex flex-column align-items-center justify-content-between text-center"
          >
            <img :src="equipo.strBadge" alt="Escudo" class="card-escudo img-fluid m-4" />
            <h5 class="card-title">{{ equipo.strTeam }}</h5>
            <p class="card-text">
              Fundación: {{ equipo.intFormedYear || "Desconocida" }}<br />
              Ubicación: {{ equipo.strLocation || "N/A" }}<br />
              <small class="">{{ equipo.strLeague }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { buscarEquipoPorNombre } from "../service/service.js";

const nombreEquipo = ref("");
const equipos = ref([]);
const loading = ref(false);
const busquedaRealizada = ref(false);

const router = useRouter();

const goToDetailTeam = (teamId) => {
  router.push({ name: "DetalleEquipo", params: { id: teamId } });
};

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

<style>
.equipo-card {
  background-color: rgb(0, 0, 0);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 15px;
  color: aliceblue;
  padding: 20px;
}

.equipo-card:hover {
  background-color: #4b0b55;
  color: white;
}

.card-escudo {
  padding: 10px;
}

.card- {
  max-width: 500px;
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
