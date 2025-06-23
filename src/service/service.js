const API_KEY = '123';
const BASE_URL = `https://www.thesportsdb.com/api/v1/json/${API_KEY}`;

export const getLigas = () => {
  return [
    { nombre: "English Premier League" },
    { nombre: "Spanish La Liga" },
    { nombre: "German Bundesliga" },
    { nombre: "Italian Serie A" },
    { nombre: "French Ligue 1" },
    { nombre: "Belgian Pro League"},
    { nombre: "English League Championship"},
    { nombre: "Scottish Premier League"},
    { nombre: "Greek Superleague Greece"},
    { nombre: "Dutch Eredivisie"},
  ]
}

export const getEquiposPorNombreLiga = async (nombreLiga) => {
  const res = await fetch(`${BASE_URL}/search_all_teams.php?l=${encodeURIComponent(nombreLiga)}`)
  const data = await res.json()
  return data.teams || []
}

export const buscarEquipoPorNombre = async (nombre) => {
  try {
    const response = await fetch(`${BASE_URL}/searchteams.php?t=${encodeURIComponent(nombre)}`);
    const data = await response.json();
    return data.teams || [];
  } catch (error) {
    console.error("Error buscando equipo:", error);
    return [];
  }
};

