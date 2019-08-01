import fieldsApi from '../apis/apis';
import getFieldsSuccess from '../actions/actions';

const fetchFields = () => {
  return dispatch => {
   return fieldsApi()
      .then(fields => {
        dispatch(getFieldsSuccess(fields))
      })
      .catch(error => {
        throw error
   })
  }
}

export default fetchFields;