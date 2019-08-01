// Action creator
const getFieldsSuccess = (fields) => {
  return {
    type: 'LOAD_FIELDS_SUCCESS',
    fields
  }
}

export default getFieldsSuccess;