<template>
  <div class="bg-nu-teritary pt-10 pb-10">
    <v-container
      class="flex flex-col items-center justify-center gap-8 md:flex-row md:items-end"
    >
      <div class="flex w-full max-w-[1000px] flex-col gap-6">
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
      </div>
      <v-btn
        @click="emits('click', teacherName, lectureName)"
        append-icon="mdi-magnify"
        color="#006E4F"
        class="w-fit text-white"
        >検索</v-btn
      >
    </v-container>
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
