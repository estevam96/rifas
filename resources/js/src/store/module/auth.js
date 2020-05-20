import { Auth, User, applyAuthHeader } from '../../api'

export default {
  state: {
    currentUser: localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null,
    processing: false,
  },
  getters: {
    currentUser: state => state.currentUser,
    processing: state => state.processing,
  },
  mutations: {
    setUser(state, payload) {
      state.currentUser = payload
      state.processing = false
      state.loginError = null
    },
    setLogout(state) {
      state.currentUser = null
      state.processing = false
      state.loginError = null
    },
    setLogout(state) {
      state.currentUser = null
      state.processing = false
      state.loginError = null
    },
  },
  actions: {
    async login({ commit }, payload) {
      await Auth.login(
        payload.email,
        payload.password
      ).then(async ({ data }) => {
        localStorage.setItem('app_token', data.access_token);
        localStorage.setItem('reflesh_token', data.refresh_token);
        applyAuthHeader();
        await User.me().then(response => {
          const user = {
            id: response.data.id,
            name: response.data.name,
            role: response.data.role,
          }
          localStorage.setItem('user', JSON.stringify(user));
          commit('setUser', user);
        })
      }).catch(erro => {
        localStorage.removeItem('app_token');
        localStorage.removeItem('reflesh_token');
      })
    },

    signOut({ commit }) {
      localStorage.removeItem('user');
      localStorage.removeItem('app_token');
      localStorage.removeItem('reflesh_token');
      applyAuthHeader()
      commit('setLogout')
    }
  }
}