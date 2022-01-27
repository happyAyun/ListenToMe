const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  URL: SERVER_URL,
  ROUTES: {
    signup: '/client-api/user/',
    co_signup: '/counselor-api/user/',
    login: '/client-api/login/',
    co_login: '/counselor-api/login/'
  }
}