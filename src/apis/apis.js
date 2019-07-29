const gitHubApi = () => {
  return fetch(`https://api.github.com/search/users?q=location%3Abangalore&sort=stars&&per_page=10`)
    .then(response => {
      return response.json().then( data => {
      	return data.items;
      })
    })
    .catch(error => {
      throw error;
    })
};

export default gitHubApi;