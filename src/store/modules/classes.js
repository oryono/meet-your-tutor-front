import classesService from '../../services/classesService';

// initial state
const state = {
  all: []
};

// getters
const getters = {};

// actions
const actions = {
  async getAllClasses({ commit }) {
    try {
      const { data } = await classesService.getAll();
      commit('setClasses', data.data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
};

// mutations
const mutations = {
  setClasses(state, classes) {
    state.all = classes;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
