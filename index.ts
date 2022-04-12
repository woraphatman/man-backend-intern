const express = require("express");
const app = express();
const port = 3001;


app.use(express.json());
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

app.get('/movie', (req, res) => {
  res.json(movie)
})

app.get('/movie/:id', (req, res) => {
  res.json(movie.find(movie => movie.id === req.params.id))
})

app.post('/movie', (req, res) => {
  movie.push(req.body)
  res.status(200).json(req.body)
})

app.put('/movie/:id', (req, res) => {
  const updateIndex = movie.findIndex(movie => movie.id === req.params.id)
  res.json(Object.assign(movie[updateIndex], req.body))
})

app.delete('/movie/:id', (req, res) => {
  const deleteIndex = movie.findIndex(movie => movie.id === req.params.id)
  movie.splice(deleteIndex, 1)
  res.status(200).send()
})
const movie = require('./db')