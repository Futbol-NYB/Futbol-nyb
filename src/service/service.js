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
};


export const getPaisesSeleccionados = () => {
  return [
    { name_en: "Argentina", code: "AR" },
  { name_en: "Brazil", code: "BR" },
  { name_en: "Chile", code: "CL" },
  { name_en: "Colombia", code: "CO" },
  { name_en: "Mexico", code: "MX" },
  { name_en: "Paraguay", code: "PY" },
  { name_en: "Peru", code: "PE" },
  { name_en: "Uruguay", code: "UY" },
  { name_en: "Venezuela", code: "VE" },
  { name_en: "Ecuador", code: "EC" },
  { name_en: "Costa Rica", code: "CR" },
  { name_en: "Bolivia", code: "BO" },
  { name_en: "Spain", code: "ES" },
  { name_en: "England", code: "GB" },
  { name_en: "France", code: "FR" },
  { name_en: "Germany", code: "DE" },
  { name_en: "Italy", code: "IT" },
  { name_en: "Portugal", code: "PT" },
  { name_en: "Belgium", code: "BE" },
  { name_en: "Turkey", code: "TR" },
  { name_en: "Russia", code: "RU" },
  { name_en: "Sweden", code: "SE" },
  { name_en: "Norway", code: "NO" },
  { name_en: "Denmark", code: "DK" },
  { name_en: "Greece", code: "GR" },
  { name_en: "Scotland", code: "SCO" },
  { name_en: "Switzerland", code: "CH" },
  { name_en: "Ukraine", code: "UA" },
  { name_en: "Poland", code: "PL" },
  { name_en: "Austria", code: "AT" }
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
