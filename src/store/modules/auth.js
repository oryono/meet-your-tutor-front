import {login} from "../../services/AuthenticationService";
import {getCurrentUser} from "../../services/AuthenticationService"
// initial state
const state = {
    authenticated: false,
    user: null
};

// getters
const getters = {};

// actions
const actions = {
    async login({ commit }, credentials) {
        try {
            const { data } = await login(credentials);
            commit('setAuth', data.user);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    },

    async getCurrentUser({commit}) {
        try {
            const {data} = await getCurrentUser();
            // eslint-disable-next-line no-console
            console.log(data);
            commit('setAuth', data)
        }catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
        }
    }
};

// mutations
const mutations = {
    setAuth(state, user) {
        state.user = user;
        state.authenticated = true
    }

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
