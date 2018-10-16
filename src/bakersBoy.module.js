class bakersBoy {
  constructor() {
    this.request = new XMLHttpRequest();
  }

  parseURL(chunks) {

  }

  get(url) {
    fetch(url)
    .then((response) => response.json())
    .then(function(data) {
      console.log(data)
    })
    .catch((error) => {
      if (err) {
        console.log('Error!')
      }
    })
  }

  post(url, data = {}) {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch((error) => {
      if (err) {
        console.log('Error!')
      })
  }

  patch(url, data) {
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }

  delete(url) {
    fetch(url, {
      method: 'DELETE'
    })
  }
}
