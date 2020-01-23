import Client from './Client';

const getEnrollments = () => {
    return Client.get('/enrollments');
};

const enroll = (classId) => {
    return Client.post('/enrollments', {enrollment: {class_id: classId}})
};

export default {
    getEnrollments,
    enroll
};