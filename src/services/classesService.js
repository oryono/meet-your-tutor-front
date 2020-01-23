import Client from './Client';

const getAll = () => {
  return Client.get('/classes');
};

const getUserClasses = (userId) => {
  return Client.get(`/users/${userId}/classes`)
}

export default {
  getAll,
  getUserClasses
};
