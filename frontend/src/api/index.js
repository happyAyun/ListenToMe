const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  URL: SERVER_URL,
  ROUTES: {
    // accounts
    signup: '/client-api/user/',
    co_signup: '/counselor-api/user/',
    login: '/client-api/login/',
    co_login: '/counselor-api/login/',


    // counseling
    counseling: '/schedule-api/',
    memoCreation: '/memo-api/write/',
    memoSelection: '/memo-api/',
    memosSelection: '/memo-api/list/',
    reviewCreation: '/review-api/save/',

    // home
    todayListeners: '/counselor-api/today/',

    // profile
    counselingList: '/schedule-api/client/approved?page=',
    doneList: '/schedule-api/client/ended?page=',
  }
}