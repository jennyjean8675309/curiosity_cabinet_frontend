export const usersReducer = (users = []) => {
  switch (action.type) {
    case 'SET_USERS':
      return [...users]
    default:
      return users
  }
}
