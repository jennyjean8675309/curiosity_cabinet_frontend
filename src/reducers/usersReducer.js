export const usersReducer = (users = [], action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return action.users
    default:
      return users
  }
}
