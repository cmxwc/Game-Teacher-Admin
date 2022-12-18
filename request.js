const url = "https://localhost:8000/"


fetch(url+"get_userData_all")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

fetch('https://reqres.in/api/users/')
  .then(response => {
    if (response.ok){
      console.log('SUCCESS')
    } else {
      console.log('Not Successful')
    }
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));

fetch('https://reqres.in/api/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'User 1'
    })
  }).then (response => {
    return response.json()
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));