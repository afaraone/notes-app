class BakersBoy {
  async get(url) {
    let json;
    await fetch(url, { mode: 'cors' })
      .then(response => response.json())
      .then(function(data) {
        json = data;
      })
      .catch(error => {
        if (error) {
          console.log('Error!');
        }
      });
    return json;
  }

  async post(url, data = {}) {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => {
        if (error) {
          console.log('Error!');
        }
      });
  }

  async update(url, data) {
    await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }

  async delete(url) {
    await fetch(url, {
      method: 'DELETE'
    });
  }
}

export default BakersBoy;
