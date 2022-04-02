var getDomainSearch = function (domainName) {
    var apiUrl = "https://api.ote-godaddy.com/v1/domains/available?domain="+domainName;
     
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
          console.log(data);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to GitHub');
      });
  };