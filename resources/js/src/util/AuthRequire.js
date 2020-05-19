export default (to, from, next) => {

  if (localStorage.getItem('user') != null && localStorage.getItem('user').length > 0) {
    next()
  } else {
    localStorage.removeItem('user')
    localStorage.removeItem('app_token')
    localStorage.removeItem('reflesh_token')
    next('/login')
  }
}