const path = require('path');

module.exports = {
  // Your existing Webpack configuration options...

  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify")
    }
  }
};
