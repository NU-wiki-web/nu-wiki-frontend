<template>
  <div class="bg-teal-600 pt-10 pb-10">
    <v-container>
      <UiSearchBar
        v-model="teacherName"
        title="講義名"
        placeholder="講義名を入力"
      />
      <UiSearchBar
        v-model="lectureName"
        title="教授名"
        placeholder="担当教員名を入力"
      />
    </v-container>
    <v-btn @click="emits('click', teacherName, lectureName)">name</v-btn>
  </div>
</template>

<script setup lang="ts">
  import { Lecture_req } from "~~/api/@types/index";

  type LectureName = Lecture_req["lectureName"];
  type TeatureName = Lecture_req["teacherName"];

  const teacherName = ref<TeatureName>(undefined);
  const lectureName = ref<LectureName>(undefined);

  interface Emits {
    (e: "click", teacherName: TeatureName, lectureName: LectureName): void;
  }
  const emits = defineEmits<Emits>();
</script>
