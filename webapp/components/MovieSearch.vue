<template>
    <div>
      <form @submit.prevent="searchMovies">
        <input type="text" v-model="searchQuery" placeholder="Search for movies...">
        <button type="submit">Search</button>
      </form>
  
      <div v-if="searchResults.length > 0">
        <div v-for="movie in searchResults" :key="movie.movie_id">
          <h3>{{ movie.title }}</h3>
          <img :src="movie.poster_image_url" :alt="movie.title">
          <p>{{ movie.popularity_summary }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        searchQuery: '',
        searchResults: []
      };
    },
    methods: {
      searchMovies() {
        axios.get(`/movies?search=${this.searchQuery}`)
          .then(response => {
            this.searchResults = response.data;
          })
          .catch(error => {
            console.error(error);
            alert('Error searching for movies');
          });
      }
    }
  };
  </script>
  