import classesService from '../../services/classesService';

// initial state
const state = {
    loading: false,
    all: [],
    userClasses: []
};

// getters
const getters = {};

// actions
const actions = {
    init({commit}) {
        commit('setLoading', true)
    },

    async getAllClasses({commit}) {
        try {
            const {data} = await classesService.getAll();
            commit('setLoading', false)
            commit('setClasses', data.data);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    },

    async getUserClasses({commit}, userId) {
        try {
            const {data} = await classesService.getUserClasses(userId);
            commit('setLoading', false);
            commit('setUserClasses', data.data);
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
    },

    setLoading(state, status) {
        state.loading = status
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
