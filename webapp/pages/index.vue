<template>
  <div>
    <h1>Movie Search</h1>
    <form @submit.prevent="searchMovies">
      <label for="searchInput">Search by title:</label>
      <input id="searchInput" v-model="searchTerm">
      <button type="submit">Search</button>
    </form>
    <MovieSearch :movies="movies" v-if="movies.length > 0" />
  </div>
</template>

<script>
import MovieSearch from '~/components/MovieSearch.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    MovieSearch
  },
  data() {
    return {
      searchTerm: '',
      movies: []
    }
  },
  methods: {
    searchMovies() {
      axios.get(`http://localhost:4000/movies?search=${this.searchTerm}`)
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
