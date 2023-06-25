<template>
  <v-container>
    <div v-if="lectures">
      <div class="mt-5 mb-5 text-slate-700">
        <v-icon icon="mdi-magnify"></v-icon>
        {{ lectures.length }} 件ヒット中
        <span class="text-xl text-black">{{ displayLectures.length }}</span>
        件表示
      </div>
      <v-list v-for="lecture in displayLectures" :key="lecture.id">
        <router-link :to="{ name: 'pdf-list', params:{ id: lecture.id } }">
          <UiListItem :id="lecture.id" :title="lecture.name" :subtitle="lecture.teacherName"></UiListItem>
        </router-link>
      </v-list>
      <UiPagination v-model:pageNumber="pageNumber" :length="pageLength" class="mt-5"></UiPagination>
    </div>
    <div v-else class="mt-10 flex items-center justify-center">
      一致する講義がありませんでした。
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { LectureType } from "types/lecture";
import { router } from "~~/router/";

interface Props {
  lectures: LectureType[];
  handleClick: (id: number) => void;
}

const props = defineProps<Props>();

const pageNumber = ref<number>(1);
const displayLecturesLength = 10;

const displayLectures = computed(() => {
  if (!props.lectures) return [];
  const startIndex = (pageNumber.value - 1) * displayLecturesLength;
  return props.lectures.slice(startIndex, startIndex + displayLecturesLength);
});

const pageLength = computed(() => {
  if (!props.lectures) return 1;
  return Math.ceil(props.lectures.length / displayLecturesLength);
});

const handleClick = (id: number) => {
  props.handleClick(id);
};
</script>
