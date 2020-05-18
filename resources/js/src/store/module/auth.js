import { Auth } from '../../api'

export default {
  state: {
    currentUser:  localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null,
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
  },
  actions: {
    async login({commit}, payload){
      await Auth.login(
        payload.email,
        payload.password
      ).then(({data}) => {
        localStorage.setItem('app_token', data.access_token);
        localStorage.setItem('reflesh_token', data.refresh_token);
      }).catch(erro =>{
        console.log(erro);
      })
    }
  }
}