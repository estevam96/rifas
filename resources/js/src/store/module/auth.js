import { Auth, User, applyAuthHeader } from '../../api'

export default {
  state: {
    currentUser: localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null,
    processing: false,
    loginError: null,
  },
  getters: {
    currentUser: state => state.currentUser,
    processing: state => state.processing,
    loginError: state => state.loginError,
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
    setProcessing(state, payload) {
      state.processing = payload
    },
    setError(state, payload) {
      state.loginError = payload
      state.currentUser = null
      state.processing = false
    },
    clearError(state) {
      state.loginError = null
    }
  },
  actions: {
    async login({ commit }, payload) {
      commit('clearError')
      commit('setProcessing', true)
      await Auth.login(
        payload.email,
        payload.password
      ).then(res => {
        localStorage.setItem('app_token', res.data.access_token);
        applyAuthHeader();

        const user = {
          id: res.data.user.id,
          name: res.data.user.name,
          role: res.data.user.role,
        }
        localStorage.setItem('user', JSON.stringify(user));
        commit('setUser', user);

      }).catch(erro => {
        console.log(erro);
        commit('setError', 'Não foi possível efetuar o login. Credenciais inválidas!')
        localStorage.removeItem('app_token');
        localStorage.removeItem('reflesh_token');
        localStorage.removeItem('user');
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