<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4 text-center">Equipos de {{ nombreLiga }}</h2>

    <div v-if="loading" class="text-center">Cargando equipos...</div>

    <ul v-else class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <li
        v-for="equipo in equipos"
        :key="equipo.idTeam"
        class="bg-gray-100 p-4 rounded text-center"
      >
        <img :src="equipo.strTeamBadge" alt="Escudo" class="w-16 h-16 mx-auto mb-2" />
        <p>{{ equipo.strTeam }}</p>
      </li>
    </ul>
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
