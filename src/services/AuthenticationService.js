import Client from './Client';

const getCurrentUser = () => {
  return Client.get('/auth/current-user');
}


const login = credentials => {
  return Client.post('/auth/login', credentials);
};

const signUp = body => {
  return Client.post('/auth/register', body);
};

export { signUp, login, getCurrentUser };
