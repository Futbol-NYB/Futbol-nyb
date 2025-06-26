<template>
  <div class="container py-5">
    <div class="">
      <h1 class="fw-bold p-5 text-start">
        Ligas de <span class="text-info">Fútbol Europeas</span>
      </h1>
      <router-link to="/equipo/Buscar" class="btn btn-outline-primary m-3">
        Buscar Equipo
      </router-link>

      <router-link to="/jugador/Buscar" class="btn btn-outline-primary m-3">
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
            <img :src="liga.logo" :alt="liga.nombre" height="50" class="mb-2" />

            {{ liga.nombre }}
          </div>
        </div>
      </div>
    </div>

    <h1 class="fw-bold p-5 text-start">
      Ligas del fútbol por <span class="text-info">Paises</span>
    </h1>

    <div class="row g-4 mt-4">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3"
        v-for="pais in paises"
        :key="pais.name_en"
      >
        <div
          class="p-5 text-center rounded border shadow-sm liga-card"
          @click="goToLeagues(pais.name_en)"
        >
          <img :src="pais.flag" :alt="pais.name_en" width="40" class="me-2" />
          {{ pais.name_en }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getPaisesSeleccionados } from "../service/service";
import { getLigas } from "../service/service.js";

const paises = ref(getPaisesSeleccionados());
const router = useRouter();
const ligas = getLigas();

const goToLiga = (nombre) => {
  router.push(`/equipos/${encodeURIComponent(nombre)}`);
};

const goToLeagues = (pais) => {
  router.push({
    name: "LigasPorPais",
    params: { nombrePais: pais },
  });
};
</script>

<style scoped>
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
.liga-card:hover {
  background-color: #03e2ff;
  color: white;
}
</style>
