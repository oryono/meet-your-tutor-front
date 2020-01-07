import Enrollments from './components/Enrollments';
import Classes from './components/Classes';
import Login from './components/Login';

const routes = [
  { path: '/enrollments', component: Enrollments },
  { path: '/courses', component: Classes },
  { path: '/login', component: Login }
];

export default routes;
