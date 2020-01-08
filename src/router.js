import Enrollments from './components/Enrollments';
import Classes from './components/Classes';
import Login from './components/Login';

const routes = [
  { path: '/enrollments', component: Enrollments },
  { path: '/classes', component: Classes },
  { path: '/my-classes', component: Classes },
  { path: '/login', component: Login }
];

export default routes;
