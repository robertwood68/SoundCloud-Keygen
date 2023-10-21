const soundcloud = require('soundcloud-scraper');

let getToken = function() {
    return soundcloud.keygen();
  }
  
let userToken = getToken()
console.log(userToken) // Promise { <pending> }
  
userToken.then(function(result) {
    console.log(result) // "Some User token"
})

