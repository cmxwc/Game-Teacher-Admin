const url = "http://localhost:8000/"


fetch(url+"get_userData_all")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

