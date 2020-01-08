import Vue from 'vue';
import Vuex from 'vuex';
import enrollments from './modules/enrollments';
import classes from './modules/classes';
import auth from "./modules/auth";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    auth,
    classes,
    enrollments
  },
  strict: debug,
});
