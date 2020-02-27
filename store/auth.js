export const getters = {
  isAuthenticated (state) {
    return state.token !== null;
  },

  getTitlePage (state) {
    return state.titlePage;
  },

  loggedInUser (state) {
    return state.user;
  },

  getError (state) {
    return state.error;
  },

  loading (state) {
    return state.loading;
  }
};

export const actions = {
  signIn ({ commit}, { token }) {
    commit('SET_TOKEN', token);
  },
  resetError ({ commit }) {
    commit('RESET_ERROR');
  },
  setTitlePage ({ commit }, { titlePage }) {
    commit('SET_TITLE_PAGE', titlePage);
  }
};

export const state = () => ({
  user: null,
  permissions: null,
  token: null,
  error: null,
  loading: null,
  titlePage: null
});

export const mutations = {
  SET_USER (state, user) {
    state.user = user;
  },
  RESET_USER (state) {
    state.user = null;
  },
  SET_PERMISSIONS (state, permissions) {
    state.permissions = permissions;
  },
  RESET_PERMISSIONS (state) {
    state.permissions = null;
  },
  SET_TOKEN (state, token) {
    state.token = token;
  },
  RESET_TOKEN (state) {
    state.token = null;
  },
  SET_ERROR (state, error) {
    state.error = error;
  },
  RESET_ERROR (state) {
    state.error = null;
  },
  SET_LOADING (state) {
    state.loading = true;
  },
  RESET_LOADING (state) {
    state.loading = false;
  },
  SET_TITLE_PAGE (state, title) {
    state.titlePage = title;
  }
};
