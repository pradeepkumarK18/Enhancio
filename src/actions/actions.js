// Action creator
const getUsersSuccess = (users) => {
  return {
    type: 'LOAD_USERS_SUCCESS',
    users
  }
}

export default getUsersSuccess;