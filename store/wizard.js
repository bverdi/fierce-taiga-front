export const getters = {
  getConfig (state) {
    return state.config;
  },
  getSchedule (state) {
    return state.schedule;
  },
  getQuestion (state) {
    return state.question;
  },
  getSessionsOnceADay (state) {
    return state.sessionsOnceADay;
  },
  getSessionsSplitDay (state) {
    return state.sessionsSplitDay;
  }
};

export const actions = {
  setConfig ({ commit }, { config }) {
    commit('SET_CONFIG', config);
  },
  setSchedule({ commit }, { schedule }) {
    commit('SET_SCHEDULE', schedule);
  },
  setQuestion({ commit }, { question }) {
    commit('SET_QUESTION', question);
  },
  setSessionsOnceADay({ commit }, { sessionsOnceADay }) {
    commit('SET_SESSION_ONCE_DAY', sessionsOnceADay);
  },
  setSessionsSplitDay({ commit }, { sessionsSplitDay }) {
    commit('SET_SESSION_SPLIT_DAY', sessionsSplitDay);
  },
};

export const state = () => ({
  config: null,
  schedule: null,
  question: null,
  sessionsOnceADay: null,
  sessionsSplitDay: null
});

export const mutations = {
  SET_CONFIG (state, config) {
    state.config = config;
  },
  RESET_CONFIG (state) {
    state.config = null;
  },
  SET_SCHEDULE (state, schedule) {
    state.schedule = schedule;
  },
  RESET_SCHEDULE (state) {
    state.schedule = null;
  },
  SET_QUESTION (state, question) {
    state.question = question;
  },
  RESET_QUESTION (state) {
    state.question = null;
  },
  SET_SESSION_ONCE_DAY (state, sessionsOnceADay) {
    state.sessionsOnceADay = sessionsOnceADay;
  },
  RESET_SESSION_ONCE_DAY (state) {
    state.sessionsOnceADay = null;
  },
  SET_SESSION_SPLIT_DAY (state, sessionsSplitDay) {
    state.sessionsSplitDay = sessionsSplitDay;
  },
  RESET_SESSION_SPLIT_DAY (state) {
    state.sessionsSplitDay = null;
  }
};
