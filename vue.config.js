const BASE_URL = "http://127.0.0.1:8000/";
const UMS_PATH = "/api";

const API_URL = "http://127.0.0.1:8000/api/";

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/sass/_reset.scss";
          @import "@/assets/sass/_vars.scss";
          @import "@/assets/sass/_defaults.scss";
        `
      }
    }
  },

  devServer: {
    proxy:{
      '/api':{
      target: `${API_URL}`,
      changeOrigin: true,
      pathRewrite: { '^/api' : '' },
      },
    }
  }
};