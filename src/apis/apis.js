const fieldsApi = () => {
  return fetch(`http://54.193.89.54:8230/readFields`)
    .then(response => {
      return response.json().then( data => {
      	return data;
      })
    })
    .catch(error => {
      throw error;
    })
};

export default fieldsApi;