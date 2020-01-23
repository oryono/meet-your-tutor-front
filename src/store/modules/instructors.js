import InstructorsService from "../../services/InstructorsService";

// initial state
const state = {
    all: []
};

// getters
const getters = {};

// actions
const actions = {
    async getInstructors({ commit }) {
        try {
            const { data } = await InstructorsService.getAllInstructors();
            commit('setInstructors', data.data);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    },
};

// mutations
const mutations = {
    setInstructors(state, instructors) {
        state.all = instructors;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}