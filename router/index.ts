import Vue from "vue";
import Router from "vue-router";
import { PagesLecture, PagesPdfList } from "~~/.nuxt/components";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/lecture-list/",
      name: "lecture-list",
      component: PagesLecture,
    },
    {
      path: "/pdf-list/:id/",
      name: "pdf-list",
      component: PagesPdfList,
    },
  ],
});
