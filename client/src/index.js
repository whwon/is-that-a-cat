const result = document.querySelector('#result');

async function search() {
  const searchValue = document.getElementById("name").value;
  console.log(searchValue)
  await fetch('http://localhost:3000/search', {
    method: 'POST',
    body: JSON.stringify({
      name: searchValue
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    mode: 'cors',
    cache: 'no-cache'
  }).then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error', error))


  // await axios.get('/search', {
  //   params: {
  //     name: searchValue,
  //   }
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
}

function test() {
  alert('DAMN')
}