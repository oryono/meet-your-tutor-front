import EnrollmentsService from "../../services/enrollmentsService";

// initial state
const state = {
    all: []
};

// getters
const getters = {};

// actions
const actions = {
    async getEnrollments({ commit }) {
        try {
            const { data } = await EnrollmentsService.getEnrollments();
            commit('setEnrollments', data.data);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    },

    async enroll({commit}, classId) {
        try {
            const { data } = await EnrollmentsService.enroll(classId);
            commit('setEnrollments', data.data);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log("error", error);
            await Promise.reject(error);

        }
    }
};

// mutations
const mutations = {
    setEnrollments(state, enrollments) {
        state.all = enrollments;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
