//Urls
const USERS_URL = 'http://localhost:3000/api/v1/users'
const PROFILE_URL = 'http://localhost:3000/api/v1/profile'

//action variables
const SET_USER_DATA = 'SET_USER_DATA'
const SET_CURRENT_USER = 'SET_CURRENT_USER'

//regular actions
const setUsersData = (usersData) =>{
  return { type: SET_USER_DATA, users: usersData}
}

const setCurrentUser = (user) =>{
  return { type: SET_CURRENT_USER, currentUser: user}
}

//fetches with middleware
const fetchingUsers = () =>{
  return (dispatch) => {
    fetch(USERS_URL)
    .then(response => response.json())
    .then(usersData => {
      dispatch(setUsersData(usersData))
    })
  }
}

const fetchingCurrentUser = () =>{
  return (dispatch) => {
    let token = localStorage.getItem('token')
    if (token) {
      fetch(PROFILE_URL, {
        method: "GET",
        headers: {
          "Authentication": `Bearer ${token}`
        }
      }).then(response => response.json())
      .then(data =>{
        dispatch(setCurrentUser(data))
      })
    }
  }
}

export { setUsersData, fetchingUsers, fetchingCurrentUser }
