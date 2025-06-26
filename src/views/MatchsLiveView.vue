<template>
  <div class="live-matches">
    <h2>⚽ Partidos en Vivo</h2>
    <div v-if="loading">Cargando...</div>
    <div v-else-if="matches.length === 0">No hay partidos en vivo.</div>
    <div v-else>
      <div v-for="match in matches" :key="match.fixture.id" class="match-card">
        <p>
          {{ match.teams.home.name }} {{ match.goals.home }} - {{ match.goals.away }}
          {{ match.teams.away.name }}
          <small>(Minuto: {{ match.fixture.status.elapsed }}')</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getLiveMatches } from "../service/LiveService";

const matches = ref([]);
const loading = ref(true);

onMounted(async () => {
  const updateMatches = async () => {
    matches.value = await getLiveMatches();
  };
  await updateMatches();
  setInterval(updateMatches, 60000); // 60 segundos
});

onMounted(async () => {
  matches.value = await getLiveMatches();
  loading.value = false;
});
</script>

<style scoped>
.match-card {
  background: #f8f9fa;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
}
</style>
