import axios from 'axios';

const API_URL = 'https://cloud.codesupply.co/endpoint/react/data.json';

export const fetchData = async() => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
