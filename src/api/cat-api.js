import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['x-api-key'] =
  'live_hBn7mbPUzNNGEN07M1LGU7zzpvrb4BbY212YNktuVfXEcLvy9XCa1NVym3P3tN8w';

export function fetchBreeds(p) {
  return axios.get(p).then(({ data }) => {
    return data;
  });
}
