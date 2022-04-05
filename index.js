// Add your code here

function submitData(name, email) {
    const configuration = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({name, email}),
};
return fetch("http://localhost:3000/users", configuration)
  .then(function (response) {
      return response.json();
  })
  .then(function(object) {  
      //{ id: 249, name: 'Steve', email: 'steve@steve.com' }
    
    document.body.innerHTML = object['id']
  })
  .catch(function (response){
 document.body.innerHTML = response
  
})
}
//so i have to be able to grab that id and apend it to the dom 