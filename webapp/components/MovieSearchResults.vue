// MovieSearchResults.vue

<template>
  <div>
    <h2>Search Results</h2>
    <ul>
      <li v-for="movie in movies" :key="movie.movie_id">
        <h3>{{ movie.title }}</h3>
        <img :src="movie.poster_image_url" alt="Movie poster">
        <p>{{ movie.popularity_summary }}</p>
      </li>
    </ul>
  </div>
</template>

<script>

// export default {
//   props: {
//     movies: {
//       type: Array,
//       required: true
//     }
//   }
// }

export default {
  name: 'MovieSearchResults',
  props: {
    movies: Array
  }
}

</script>
