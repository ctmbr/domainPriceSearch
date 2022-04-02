var userFormEl = document.querySelector('#user-form');
var domainNameInputEl = document.querySelector('#domainNameSearch')

var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var domainName = domainNameInputEl.value.trim();
  
    if (domainName) {
      getDomainSearch(domainName);
  
    //   repoContainerEl.textContent = '';
      domainNameInputEl.value = '';
    } else {
      alert('Please enter a domain name');
    }
  };


var getDomainSearch = function (domainName) {
    var apiUrl = "https://api.ote-godaddy.com/v1/domains/available?domain="+domainName+"&forTransfer=true"+"accept: application/json"+"Authorization: sso-key 3mM44UbhTYhDPP_6ZW4o82DRTAbEDFp79cGov:ED2H93QubCNczwxjUaj9G2";
     
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

  userFormEl.addEventListener('submit', formSubmitHandler);