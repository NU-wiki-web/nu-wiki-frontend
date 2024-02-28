// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    "~/assets/css/main.css",
    "@mdi/font/css/materialdesignicons.css"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  build: {
    transpile: ["vuetify"]
  },
  vite: {
    define: {
      "process.env.DEBUG": false
    }
  },
  runtimeConfig: {
    public: {
      apiUrl: "http://localhost:8080/"
    },
    nitro: {
      prerender: {
        autoSubfolderIndex: false
      }
    }
  }
});
