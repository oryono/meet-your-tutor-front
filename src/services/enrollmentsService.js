import Client from './Client';

const getEnrollments = () => {
    return Client.get('/enrollments');
};

export default {
    getEnrollments
};