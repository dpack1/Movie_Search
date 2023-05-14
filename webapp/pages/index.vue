<template>
  <div class="container">
    <h1 class="title">Movie Search</h1>
    <form @submit.prevent="searchMovies" class="form">
      <div class="field">
        <label for="searchInput" class="label">Search by title:</label>
        <div class="control">
          <input id="searchInput" v-model="searchTerm" class="input">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button type="submit" class="button is-primary">Search</button>
        </div>
      </div>
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

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.title {
  margin-bottom: 2rem;
}

.form {
  margin-bottom: 2rem;
}

.input {
  width: 100%;
}

.button {
  width: 100%;
}
</style>
