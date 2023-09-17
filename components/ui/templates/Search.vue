<template>
  <div class="bg-teal-600 pt-10 pb-10">
    <v-container>
      <UiSearchBar @click="onClick"></UiSearchBar>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import { Lecture_req } from "~~/api/@types/index";

  interface Props {
    teacherName: Lecture_req["teacherName"];
    lectureName: Lecture_req["lectureName"];
  }

  interface Emits {
    (e: "click", value: string | undefined): void;
  }

  const props = defineProps<Props>();
  const emits = defineEmits<Emits>();

  const onClick = function (value: string | undefined) {
    emits("click", value);
  };
</script>
