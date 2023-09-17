import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const customLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#006E4F"
  }
};
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "customLightTheme",
      themes: {
        customLightTheme
      }
    }
  });

  nuxtApp.vueApp.use(vuetify);
});
