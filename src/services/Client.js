import axios from 'axios';

const client = axios.create({
  baseURL: 'https://meet-your-tutor.patrickoryono.site/api/'
});

client.defaults.headers.common['Authorization'] =
  localStorage.getItem('token') || '';
client.defaults.headers.post['Content-Type'] = 'application/json';

export default client;
