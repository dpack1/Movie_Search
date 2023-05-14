<template>
    <div>
      <h2>Movies:</h2>
      <ul>
        <li v-for="movie in movies" :key="movie.movie_id">
          <div class="movie">
            <img :src="movie.poster_image_url" alt="Movie Poster" class="poster-image">
            <div class="movie-details">
              <h3>{{ movie.title }}</h3>
              <p>{{ movie.popularity_summary }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MovieSearch',
    props: {
      movies: {
        type: Array,
        default: () => []
      }
    }
  }
  </script>
  
  <style scoped>
  .movie {
    display: flex;
    margin-bottom: 20px;
  }
  .poster-image {
    width: 100px;
    height: 150px;
    margin-right: 20px;
  }
  .movie-details {
    display: flex;
    flex-direction: column;
  }
  </style>
  