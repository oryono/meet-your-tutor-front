import Enrollments from './components/Enrollments';
import Classes from './components/Classes';
import MyClasses from './components/MyClasses'
import Instructors from './components/Instructors'
import Login from './components/Login';
import VueRouter from "vue-router";
import store from './store'
import NewClass from "./components/NewClass";

const routes = [
    {path: '/enrollments', component: Enrollments, meta: {requiresAuth: true}},
    {path: '/all-classes', component: Classes, meta: {requiresAuth: true}},
    {path: '/my-classes', component: MyClasses, meta: {requiresAuth: true}},
    {path: '/instructors', component: Instructors, meta: {requiresAuth: true}},
    {path: '/classes/create', component: NewClass, meta: {requiresAuth: true}},
    {path: '/login', component: Login},
];

const router = new VueRouter({
    routes
});
//
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.state.auth.authenticated) {
            next('/login')
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
});

export default router;
