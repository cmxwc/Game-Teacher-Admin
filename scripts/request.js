const http_url = "http://localhost:8000/"




// function fetchData(url, options) {
//   return fetch(url, options)
//     .then(response => response.json())
//     .then(data => {
//       return data;
//     })
//     .catch(error => console.error(error))
// }

// export {http_url, fetchData};


// function fetchData(url, options) {
//   return fetch(url, options)
//     .then(response => response.json())
//     .then(data => {
//       return data;
//     })
//     .catch(error => {
//       console.error(error);
//       throw error;
//     });
// }


async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    return console.error(error);
  }
}

async function getData(url) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      },
      ...options
    });
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    return console.error(error);
  }
}

async function postData(url, body, options) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      },
      ...options
    });
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    return console.error(error);
  }
}



export {http_url, fetchData, postData, getData};