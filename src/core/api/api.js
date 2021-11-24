import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiSecureClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiSecureClient.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem('Token');
    if (token) {
      request.headers['Authorization'] = `Bearer ${token}`;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

export { apiClient, apiSecureClient };
