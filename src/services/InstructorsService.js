import Client from './Client';

const getAllInstructors = () => {
    return Client.get('/users')
};
export default {
    getAllInstructors
};