export const currentUserReducer = (user = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return action.user
    default:
      return user
  }
}
