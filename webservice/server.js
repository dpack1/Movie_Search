const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/movies', (req, res) => {
  const search = req.query.search;
   console.log("ping");
  // Call TMDB API
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${search}`)
  .then(response => {
      const movies = response.data.results.slice(0, 10).map(movie => ({
        movie_id: movie.id,
        title: movie.title,
        poster_image_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        popularity_summary: `${movie.popularity} out of ${movie.vote_count}`
      }));
      console.log(movies)
      res.json(movies);
      console.log("pong")

    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error searching for movies');
    });
});


//Port 4000
app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
