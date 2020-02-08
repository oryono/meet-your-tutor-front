import axios from 'axios';

const client = axios.create({
    baseURL: 'https://api.meetyourtutor.online/api/'
});

client.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}` || '';
client.defaults.headers.common['Content-Type'] = 'application/json';

export default client;
