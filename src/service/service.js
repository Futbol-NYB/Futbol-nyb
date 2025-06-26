const API_KEY = '123';
const BASE_URL = `https://www.thesportsdb.com/api/v1/json/${API_KEY}`;

export const getPaisesSeleccionados = () => {
  return [
    { name_en: "Argentina", code: "AR" },
    { name_en: "Chile", code: "CL" },
    { name_en: "England", code: "GB" },
    { name_en: "Spain", code: "ES" },
    { name_en: "Brazil", code: "BR" }
  ];
};

export const getLigasPorPais = async (pais, deporte = "Soccer") => {
  try {
    const res = await fetch(
      `${BASE_URL}/search_all_leagues.php?c=${encodeURIComponent(pais)}&s=${encodeURIComponent(deporte)}`
    );
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    const data = await res.json();
    return data.countries || [];
  } catch (error) {
    console.error("❌ Error al obtener ligas:", error.message);
    return [];
  }
};


export const getEquiposPorNombreLiga = async (nombreLiga) => {
  try {
    const res = await fetch(
      `${BASE_URL}/search_all_teams.php?l=${encodeURIComponent(nombreLiga)}`
    );
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    const data = await res.json();
    return data.teams || [];
  } catch (error) {
    console.error("❌ Error al obtener equipos:", error.message);
    return [];
  }
};

export const buscarEquipoPorNombre = async (nombre) => {
  try {
    const res = await fetch(
      `${BASE_URL}/searchteams.php?t=${encodeURIComponent(nombre)}`
    );
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    const data = await res.json();
    return data.teams || [];
  } catch (error) {
    console.error("❌ Error buscando equipo:", error.message);
    return [];
  }
};

export const buscarJugadorPorNombre = async (nombre) => {
  try {
    const res = await fetch(
      `${BASE_URL}/searchplayers.php?p=${encodeURIComponent(nombre)}`
    );
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    const data = await res.json();
    return data.player || [];
  } catch (error) {
    console.error("❌ Error al buscar jugador:", error.message);
    return [];
  }
};

export const getJugadorPorEquipo = async (idTeam) => {
  try {
    const res = await fetch(
      `${BASE_URL}/lookup_all_players.php?id=${idTeam}`
    );
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    const data = await res.json();
    return data.player || [];
  } catch (error) {
    console.error("❌ Error buscando jugadores del equipo:", error.message);
    return [];
  }
};
