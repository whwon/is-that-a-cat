import axios from 'axios';

const config = {
  headers: {
    "x-api-key": process.env.THE_CAT_API_KEY
  }
}

export async function search(req, res) {
  const { name } = req.body;

  if (!name) {
    res.status(400).send('Did not receive a cat name.')
    return
  }
  const searchedCatName = name.toLowerCase();
  const results = await axios.get('https://api.thecatapi.com/v1/breeds').then(({ data }) => data)

  const hashMap = new Map();
  for (let i = 0; i < results.length; i++) {
    hashMap.set(results[i].name.toLowerCase(), i)
  }

  if(hashMap.has(searchedCatName)) res.status(200).json(results[hashMap.get(searchedCatName)])
  else res.status(400).send('Cat with that name does not exist. Try Again!')
}