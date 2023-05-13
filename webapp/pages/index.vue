<template>
  <div>
    <h1>Welcome to My Movie Search App</h1>
    <form>
      <label for="search-input">Search for a movie:</label>
      <input type="text" id="search-input" v-model="searchTerm">
      <button type="submit" @click.prevent="searchMovies">Search</button>
    </form>
    <div v-if="searchResults.length">
      <h2>Search Results:</h2>
      <div v-for="(movie, index) in searchResults" :key="index">
        <h3>{{ movie.title }}</h3>
        <img :src="movie.poster_image_url" alt="Movie Poster">
        <p>{{ movie.popularity_summary }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
      searchResults: []
    }
  },
  methods: {
    async searchMovies() {
      try {
        const response = await this.$axios.get(`/movies?search=${this.searchTerm}`)
        this.searchResults = response.data
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
