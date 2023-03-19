<template>
  <v-container>
    <div>{{ lectures.length }} 件ヒット中 {{ displayLectures.length }} 件表示</div>
    <v-list v-for="lecture in displayLectures" :key="lecture.id">
      <UiListItem
        :id="lecture.id"
        :title="lecture.name"
        :subtitle="lecture.teacher_name"
        @click="handleClick(lecture.id)"
      ></UiListItem>
    </v-list>
    <UiPagination v-model="pageNumber" :length="pageLength"></UiPagination>
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
const displayLecturesLength = 10;
const pageLength = Math.ceil(props.lectures.length / displayLecturesLength);

const displayLectures = computed(() => {
  return props.lectures.slice(
    displayLecturesLength * (pageNumber.value - 1),
    displayLecturesLength * pageNumber.value
  );
});
</script>
