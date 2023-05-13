<template>
    <div class="container">
      <form @submit.prevent="searchMovies" class="search-form">
        <input type="text" v-model="searchQuery" placeholder="Search for movies..." class="search-input">
        <button type="submit" class="search-btn">Search</button>
      </form>
  
      <div v-if="searchResults.length > 0" class="results">
        <div v-for="movie in searchResults" :key="movie.movie_id" class="result">
          <h3 class="title">{{ movie.title }}</h3>
          <img :src="movie.poster_image_url" :alt="movie.title" class="poster">
          <p class="summary">{{ movie.popularity_summary }}</p>
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
  
  <style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .search-form {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .search-input {
    flex-grow: 1;
    margin-right: 10px;
    padding: 10px;
    font-size: 16px;
  }
  
  .search-btn {
    padding: 10px;
    font-size: 16px;
    background-color: #0074d9;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  .results {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .result {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    max-width: 200px;
  }
  
  .title {
    font-size: 20px;
    margin: 10px 0;
    text-align: center;
  }
  
  .poster {
    max-width: 200px;
    margin-bottom: 10px;
  }
  
  .summary {
    font-size: 16px;
    text-align: center;
  }
  </style>
  