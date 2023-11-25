import axios from 'axios';

const API_KEY = '39688080-559ef29e62f6f96d97ef6163c';
axios.defaults.baseURL = `https://pixabay.com`;

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `/api/?key=${API_KEY}&q=${query}&page=${page}&per_page=12`
  );
  return response.data;
};
