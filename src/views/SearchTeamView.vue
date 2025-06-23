<template>
  <div class="p-6 max-w-xl mx-auto">
    <h1 class="text-2xl font-bold mb-4 text-center">Buscar Equipo</h1>

    <form @submit.prevent="buscarEquipo" class="mb-6 flex gap-2">
      <input
        v-model="nombreEquipo"
        type="text"
        placeholder="Ej. Arsenal, Real Madrid..."
        class="flex-1 border rounded px-4 py-2"
      />
      <button
        type="submit"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Buscar
      </button>
    </form>

    <div v-if="loading" class="text-center">Buscando...</div>

    <div
      v-else-if="equipos.length === 0 && busquedaRealizada"
      class="text-center text-gray-500"
    >
      No se encontraron equipos.
    </div>

    <ul v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <li
        v-for="equipo in equipos"
        :key="equipo.idTeam"
        class="bg-gray-100 p-4 rounded text-center"
      >
        <img
          :src="equipo.strTeamBadge"
          alt="Escudo"
          class="w-20 h-20 mx-auto mb-2 object-contain"
        />

        <p class="font-semibold">{{ equipo.strTeam }}</p>
        <p>{{ equipo.intFormedYear }}</p>
        <p>{{ equipo.strLocation }}</p>
        <p class="text-sm text-gray-500">{{ equipo.strLeague }}</p>
      </li>
    </ul>
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
