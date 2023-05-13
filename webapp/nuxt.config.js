export default {

  modules: [
    '@nuxtjs/axios'
  ],

  build: {
    extend(config, { isDev, isClient }) {
      // Add a new loader to handle .csv files
      config.module.rules.push({
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      })
    }
  }
  
}

// export default {
//   // ...
//   build: {
//     postcss: {
//       plugins: {
//         tailwindcss: {},
//         autoprefixer: {},
//       },
//     },
//   },
// };
