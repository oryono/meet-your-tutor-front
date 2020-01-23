import Vue from 'vue';
import Vuex from 'vuex';
import enrollments from './modules/enrollments';
import classes from './modules/classes';
import auth from "./modules/auth";
import instructors from './modules/instructors'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    auth,
    classes,
    enrollments,
    instructors
  },
  strict: debug,
  plugins: [createPersistedState()]
});
