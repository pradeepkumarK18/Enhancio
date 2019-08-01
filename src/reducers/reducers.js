const fieldsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_FIELDS_SUCCESS':
      return action.fields;
    case 'REMOVE_FIELD_SUCCESS':
      return state.filter((fields, i) => i !== action.id);
    default:
      return state;
  }
};

export default fieldsReducer;