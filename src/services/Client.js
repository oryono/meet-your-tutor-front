import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:81/api/'
});

client.defaults.headers.common['Authorization'] =
  `Bearer ${localStorage.getItem('token')}` || '';
client.defaults.headers.post['Content-Type'] = 'application/json';

export default client;
