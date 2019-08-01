// Action creator
const removeField = (id) => {
  return {
    type: 'REMOVE_FIELD_SUCCESS',
    id
  }
}

export default removeField;