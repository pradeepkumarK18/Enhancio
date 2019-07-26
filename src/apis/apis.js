const gitHubApi = () => {
  return fetch(`https://api.github.com/search/users?q=location%3Abangalore&sort=stars`)
    .then(response => {
      return response.json().then( data => {
      	return data.items.slice(0, 10);
      })
    })
    .catch(error => {
      throw error;
    })
};

export default gitHubApi;