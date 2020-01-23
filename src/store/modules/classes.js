import classesService from '../../services/classesService';

// initial state
const state = {
    all: [],
    userClasses: []
};

// getters
const getters = {};

// actions
const actions = {
    async getAllClasses({commit}) {
        try {
            const {data} = await classesService.getAll();
            commit('setClasses', data.data);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    },

    async getUserClasses({commit}, userId) {
        try {
            const {data} = await classesService.getUserClasses(userId);
            commit('setUserClasses', data.data)
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
        }
    }
};

// mutations
const mutations = {
    setClasses(state, classes) {
        state.all = classes;
    },

    setUserClasses(state, classes) {
        state.userClasses = classes
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
