const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_USERS_SUCCESS':
      return action.users;
    default:
      return state;
  }
};

export default usersReducer;