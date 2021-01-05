module.exports = {
  devServer: {
    overlay: false,
    proxy: {
      "/api": {
        target: "https://api.iynn.cn/film/api/v1/",
        changeOrigin : true,
        pathRewrite: {
          "^/api": ""
        }
      },
    }
  }
}