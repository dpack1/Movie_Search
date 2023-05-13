// App.vue

<template>
  <div>
    <h1>Movie Search</h1>
    <form @submit.prevent="searchMovies">
      <label for="searchInput">Search by title:</label>
      <input id="searchInput" v-model="searchTerm">
      <button type="submit">Search</button>
    </form>
    <MovieSearchResults :movies="movies" v-if="movies.length > 0" />
  </div>
</template>

<script>
import MovieSearchResults from '~/components/MovieSearchResults.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    MovieSearchResults
  },
  data() {
    return {
      searchTerm: '',
      movies: []
    }
  },
  methods: {
    searchMovies() {
      axios.get(`/movies?search=${this.searchTerm}`)
        .then(response => {
          this.movies = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>
