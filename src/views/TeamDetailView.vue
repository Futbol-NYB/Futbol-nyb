<template>
  <div class="container py-5">
    <!-- Encabezado con botón de volver -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <button @click="$router.go(-1)" class="btn btn-outline-secondary">
        &larr; Volver
      </button>
      <h1 class="text-center mb-0 flex-grow-1">Detalles del Equipo</h1>
      <div style="width: 100px"></div>
      <!-- Espacio para alinear -->
    </div>

    <!-- Cargando -->
    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt-2 text-secondary">Cargando información del equipo...</p>
    </div>

    <!-- Equipo no encontrado -->
    <div v-else-if="!equipo" class="alert alert-warning text-center">
      No se encontró información para este equipo.
    </div>

    <!-- Detalles del equipo -->
    <div v-else class="team-detail-card">
      <div class="row">
        <!-- Columna izquierda - Información básica -->
        <div class="col-md-4 text-center p-4">
          <img
            :src="equipo.strTeamBadge || '/default-badge.png'"
            :alt="equipo.strTeam"
            class="img-fluid team-badge mb-4"
            style="max-height: 200px"
          />
          <h2 class="team-name">{{ equipo.strTeam }}</h2>
          <p class="text-muted">{{ equipo.strLeague || "Liga no especificada" }}</p>

          <div class="mt-4">
            <a
              v-if="equipo.strWebsite"
              :href="equipo.strWebsite"
              target="_blank"
              class="btn btn-outline-primary me-2 mb-2"
            >
              Sitio Web
            </a>
            <a
              v-if="equipo.strFacebook"
              :href="equipo.strFacebook"
              target="_blank"
              class="btn btn-outline-primary me-2 mb-2"
            >
              Facebook
            </a>
            <a
              v-if="equipo.strTwitter"
              :href="equipo.strTwitter"
              target="_blank"
              class="btn btn-outline-primary mb-2"
            >
              Twitter
            </a>
          </div>
        </div>

        <!-- Columna derecha - Detalles -->
        <div class="col-md-8 p-4">
          <div class="team-info-section">
            <h4 class="section-title">Información General</h4>
            <div class="row">
              <div class="col-md-6">
                <p><strong>País:</strong> {{ equipo.strCountry || "N/A" }}</p>
                <p><strong>Ciudad:</strong> {{ equipo.strStadiumLocation || "N/A" }}</p>
                <p>
                  <strong>Año de fundación:</strong>
                  {{ equipo.intFormedYear || "Desconocido" }}
                </p>
              </div>
              <div class="col-md-6">
                <p><strong>Estadio:</strong> {{ equipo.strStadium || "N/A" }}</p>
                <p>
                  <strong>Capacidad:</strong>
                  {{
                    equipo.intStadiumCapacity
                      ? `${equipo.intStadiumCapacity.toLocaleString()} espectadores`
                      : "N/A"
                  }}
                </p>
                <p><strong>Deporte:</strong> {{ equipo.strSport || "N/A" }}</p>
              </div>
            </div>
          </div>

          <div class="team-info-section mt-4">
            <h4 class="section-title">Descripción</h4>
            <p class="team-description" v-if="equipo.strDescriptionEN">
              {{ equipo.strDescriptionEN }}
            </p>
            <p v-else class="text-muted">No hay descripción disponible.</p>
          </div>

          <div v-if="equipo.strStadiumThumb" class="mt-4">
            <h4 class="section-title">Estadio</h4>
            <img
              :src="equipo.strStadiumThumb"
              :alt="`Estadio ${equipo.strStadium}`"
              class="img-fluid rounded stadium-image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getDetalleEquipo } from "../service/service";

const route = useRoute();
const equipo = ref(null);
const loading = ref(true);

onMounted(async () => {
  try {
    equipo.value = await getDetalleEquipo(route.params.id);
  } catch (error) {
    console.error("Error al cargar detalles del equipo:", error);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.team-detail-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.team-badge {
  max-width: 200px;
  height: auto;
  object-fit: contain;
}

.team-name {
  font-weight: 700;
  color: #333;
  margin-top: 1rem;
}

.team-info-section {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.section-title {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.team-description {
  white-space: pre-line;
  line-height: 1.8;
  text-align: justify;
}

.stadium-image {
  max-height: 300px;
  width: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .team-detail-card {
    margin: 0 -15px;
    border-radius: 0;
  }
}
</style>
