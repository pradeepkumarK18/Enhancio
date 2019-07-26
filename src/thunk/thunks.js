import gitHubApi from '../apis/apis';
import getUsersSuccess from '../actions/actions';

const fetchUsers = () => {
  return dispatch => {
   return gitHubApi()
      .then(users => {
        dispatch(getUsersSuccess(users))
      })
      .catch(error => {
        throw error
   })
  }
}

export default fetchUsers;