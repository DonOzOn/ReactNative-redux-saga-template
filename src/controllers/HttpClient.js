import ENV from 'react-native-config';
import axios from 'axios';
import strings from 'localization';
console.log('ENV', ENV)
const client = axios.create({
  // baseURL: ENV.API_URL,
  baseURL: 'https://5fb3785db6601200168f76a3.mockapi.io/',
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.response.use(
  response => response,
  error => {
    if (!error.response) {
      throw new Error(strings.connectionError);
    }

    return Promise.reject(error);
  }
);

export default client;
