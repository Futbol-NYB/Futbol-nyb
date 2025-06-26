import axios from 'axios';

const API_KEY = '069f256ef0msh691a81fd484da84p1f1039jsn733a3c63cfd0';
const BASE_URL = 'https://api-football-v1.p.rapidapi.com/v3';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
  }
});

export const getLiveMatches = async () => {
  try {
    const response = await api.get('/fixtures?live=all');
    return response.data.response;
  } catch (error) {
    console.error('Error fetching live matches:', error);
    return [];
  }
};