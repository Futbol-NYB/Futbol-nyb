const API_KEY = '123';
const BASE_URL = `https://www.thesportsdb.com/api/v1/json/${API_KEY}`;

export const getLigas = () => {
  return [
    {
      nombre: "English Premier League",
      logo: "../src/assets/logosLiga/PremierLeague.jpg"
    },
    {
      nombre: "Spanish La Liga",
      logo: "https://www.thesportsdb.com/images/media/league/badge/ja4it51687628717.png"
    },
    {
      nombre: "German Bundesliga",
      logo: "https://www.thesportsdb.com/images/media/league/badge/teqh1b1679952008.png"
    },
    {
      nombre: "Italian Serie A",
      logo: "https://www.thesportsdb.com/images/media/league/badge/67q3q21679951383.png"
    },
    {
      nombre: "French Ligue 1",
      logo: "https://www.thesportsdb.com/images/media/league/badge/9f7z9d1742983155.png"
    },
    {
      nombre: "Belgian Pro League",
      logo: "https://www.thesportsdb.com/images/media/league/badge/mjit7n1593634474.png"
    },
    {
      nombre: "English League Championship",
      logo: "../src/assets/logosLiga/EFL.jpg"
    },
    {
      nombre: "Scottish Premier League",
      logo: "https://www.thesportsdb.com/images/media/league/badge/gb4m951721302014.png"
    },
    {
      nombre: "Greek Superleague Greece",
      logo: "https://www.thesportsdb.com/images/media/league/badge/jm7ky01602788843.png"
    },
    {
      nombre: "Dutch Eredivisie",
      logo: "../src/assets/logosLiga/Eredivisie.jpg"
    }
  ];
};



export const getPaisesSeleccionados = () => {
  return [
    { name_en: "Argentina", code: "ar", flag: "https://flagcdn.com/w80/ar.png" },
    { name_en: "Brazil", code: "br", flag: "https://flagcdn.com/w80/br.png" },
    { name_en: "Chile", code: "cl", flag: "https://flagcdn.com/w80/cl.png" },
    { name_en: "Colombia", code: "co", flag: "https://flagcdn.com/w80/co.png" },
    { name_en: "Mexico", code: "mx", flag: "https://flagcdn.com/w80/mx.png" },
    { name_en: "Paraguay", code: "py", flag: "https://flagcdn.com/w80/py.png" },
    { name_en: "Peru", code: "pe", flag: "https://flagcdn.com/w80/pe.png" },
    { name_en: "Uruguay", code: "uy", flag: "https://flagcdn.com/w80/uy.png" },
    { name_en: "Venezuela", code: "ve", flag: "https://flagcdn.com/w80/ve.png" },
    { name_en: "Ecuador", code: "ec", flag: "https://flagcdn.com/w80/ec.png" },
    { name_en: "Costa Rica", code: "cr", flag: "https://flagcdn.com/w80/cr.png" },
    { name_en: "Bolivia", code: "bo", flag: "https://flagcdn.com/w80/bo.png" },
    { name_en: "Spain", code: "es", flag: "https://flagcdn.com/w80/es.png" },
    { name_en: "England", code: "gb", flag: "https://flagcdn.com/w80/gb.png" },
    { name_en: "France", code: "fr", flag: "https://flagcdn.com/w80/fr.png" },
    { name_en: "Germany", code: "de", flag: "https://flagcdn.com/w80/de.png" },
    { name_en: "Italy", code: "it", flag: "https://flagcdn.com/w80/it.png" },
    { name_en: "Portugal", code: "pt", flag: "https://flagcdn.com/w80/pt.png" },
    { name_en: "Belgium", code: "be", flag: "https://flagcdn.com/w80/be.png" },
    { name_en: "Turkey", code: "tr", flag: "https://flagcdn.com/w80/tr.png" },
    { name_en: "Russia", code: "ru", flag: "https://flagcdn.com/w80/ru.png" },
    { name_en: "Sweden", code: "se", flag: "https://flagcdn.com/w80/se.png" },
    { name_en: "Norway", code: "no", flag: "https://flagcdn.com/w80/no.png" },
    { name_en: "Denmark", code: "dk", flag: "https://flagcdn.com/w80/dk.png" },
    { name_en: "Greece", code: "gr", flag: "https://flagcdn.com/w80/gr.png" },
    { name_en: "Scotland", code: "gb-sct", flag: "https://flagcdn.com/w80/gb.png" }, // No ISO 3166-1 para Escocia
    { name_en: "Switzerland", code: "ch", flag: "https://flagcdn.com/w80/ch.png" },
    { name_en: "Ukraine", code: "ua", flag: "https://flagcdn.com/w80/ua.png" },
    { name_en: "Poland", code: "pl", flag: "https://flagcdn.com/w80/pl.png" },
    { name_en: "Austria", code: "at", flag: "https://flagcdn.com/w80/at.png" }
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

export const getDetalleEquipo = async (teamId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/lookupteam.php?id=${teamId}`
    );
    const data = await response.json();
    return data.teams[0] || null;
  } catch (error) {
    console.error("Error fetching team details:", error);
    throw error;
  }
};
