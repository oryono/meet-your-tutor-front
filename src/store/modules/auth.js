import {login} from "../../services/AuthenticationService";
import {getCurrentUser} from "../../services/AuthenticationService"
import client from "../../services/Client"

// initial state
const state = {
    user: null,
    authenticated: false
};

// getters
const getters = {};

// actions
const actions = {
    async login({commit}, credentials) {
        try {
            const {data} = await login(credentials);
            commit('setAuth', data.user);
            localStorage.setItem('token', data.token);
            client.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    },

    async getCurrentUser({commit}) {
        try {
            const {data} = await getCurrentUser();
            commit('setAuth', data)
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
        }
    },

    // eslint-disable-next-line no-unused-vars
    logOutUser({commit}) {
        localStorage.removeItem('token');
        delete client.defaults.headers.common['Authorization'];
        commit('unsetAuth')
    }
};

// mutations
const mutations = {
    setAuth(state, user) {
        state.user = user;
        state.authenticated = true
    },

    // eslint-disable-next-line no-unused-vars
    unsetAuth(state) {
        state.user = null;
        state.authenticated = false;
    }

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
