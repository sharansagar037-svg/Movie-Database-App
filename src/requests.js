const API_KEY = 'c4a21052';
const BASE_URL = 'https://www.omdbapi.com/';

const requests = {
    fetchTrending: `${BASE_URL}?s=marvel&apikey=${API_KEY}`,
    fetchNetflixOriginals: `${BASE_URL}?s=netflix&apikey=${API_KEY}`,
    fetchTopRated: `${BASE_URL}?s=avengers&apikey=${API_KEY}`,
    fetchActionMovies: `${BASE_URL}?s=action&apikey=${API_KEY}`,
    fetchComedyMovies: `${BASE_URL}?s=comedy&apikey=${API_KEY}`,
    fetchHorrorMovies: `${BASE_URL}?s=horror&apikey=${API_KEY}`,
    fetchRomanceMovies: `${BASE_URL}?s=romance&apikey=${API_KEY}`,
    fetchDocumentaries: `${BASE_URL}?s=doc&apikey=${API_KEY}`,
};

export default requests;
