<template>
  <v-container>
    <div v-if="lectures">
      <v-list v-for="lecture in displayLectures" :key="lecture.id">
        <UiListItem
          :id="lecture.id"
          :title="lecture.name"
          :subtitle="lecture.teacher_name"
          @click="handleClick(lecture.id)"
        ></UiListItem>
      </v-list>
      <UiPagination v-model="pageNumber" :length="pageLength"></UiPagination>
    </div>
    <div v-else>読み込み中...</div>
  </v-container>
</template>

<script setup lang="ts">
import { LectureType } from "types/lecture";

interface Props {
  lectures: [LectureType];
  handleClick: (id: number) => void;
}
const props = defineProps<Props>();

const pageNumber = ref<number>(1);
const displayLecturesLength = 10; // 適当

let pageLength = 1;
const displayLectures = ref<[LectureType]>();

const updateDisplayLectures = function () {
  // 初回読み込み時、lectures.lengthがundefinedとなり、計算ができないエラーを防ぐ。
  if (props.lectures) {
    pageLength = Math.ceil(props.lectures.length / displayLecturesLength);
    displayLectures.value = props.lectures.slice(
      displayLecturesLength * (pageNumber.value - 1),
      displayLecturesLength * pageNumber.value
    );
  }
};
updateDisplayLectures();

// propsが更新されたときにdisplayLecturesの再計算が走るようにする。
watch(
  () => props.lectures,
  () => {
    updateDisplayLectures();
  },
  { deep: true }
);
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
