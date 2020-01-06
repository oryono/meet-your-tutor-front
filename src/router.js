import Enrollments from './components/Enrollments';
import Courses from './components/Courses';
import Login from './components/Login';

const routes = [
  { path: '/enrollments', component: Enrollments },
  { path: '/courses', component: Courses },
  { path: '/login', component: Login }
];

export default routes;
