import Vue from 'vue';
import Vuex from 'vuex';
import enrollments from './modules/enrollments';
import classes from './modules/classes';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    classes,
    enrollments
  },
  strict: debug
});
