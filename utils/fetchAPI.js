import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': 'c1a01d7925msh5ee1383f614a4a4p147794jsn6948a7d9abe6'
      },
    });
      
    return data;
  }
    
