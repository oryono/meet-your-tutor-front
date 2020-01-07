import Client from './Client';

const getAll = () => {
  return Client.get('/classes');
};

export default {
  getAll
};
