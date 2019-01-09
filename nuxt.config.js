module.exports = {
  /*
   ** Set source directory
   */
  srcDir: "src/",
  /*
   ** Headers of the page
   */
  head: {
    title: "Welcome to Nuxt!",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "manifest", href: "/manifest.json" }
    ]
  },
  modules: ["~/modules/nuxt-typescript"],
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    babel: {
      presets: ["@vue/app"]
    }
  }
};
