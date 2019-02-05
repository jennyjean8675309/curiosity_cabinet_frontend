//Urls
const USERS_URL = 'http://localhost:3000/api/v1/users'

//action variables
const SET_USER_DATA = 'SET_USER_DATA'

//regular actions
const setUsersData = (usersData) =>{
  return { type: SET_USER_DATA, users: usersData}
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

export { setUsersData, fetchingUsers }
