import api from "~/api/$api";
import aspida from "@aspida/fetch"

export default defineNuxtPlugin(() => {
  return {
    provide: {
      api() {
        return api(aspida());
      },
    },
  };
});
