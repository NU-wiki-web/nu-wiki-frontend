<template>
  <v-container>
    <div v-if="lectures">
      <div class="mt-5 mb-5 text-slate-700">
        <v-icon icon="mdi-magnify"></v-icon>
        {{ lectures.length }} 件ヒット中
        <span class="text-xl text-black">{{ displayLectures.length }}</span> 件表示
      </div>
      <v-list v-for="lecture in displayLectures" :key="lecture.id">
        <UiListItem
          :id="lecture.id"
          :title="lecture.name"
          :subtitle="lecture.teacherName"
          @click="handleClick(lecture.id)"
        ></UiListItem>
      </v-list>
      <UiPagination
        v-model:pageNumber="pageNumber"
        :length="pageLength"
        class="mt-5"
      ></UiPagination>
    </div>
    <div v-else class="mt-10 flex items-center justify-center">
      一致する講義がありませんでした。
    </div>
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
const displayLectures = ref<LectureType[]>([]);

const updateDisplayLectures = function () {
  // 初回読み込み時、lectures.lengthがundefinedとなり、計算ができないエラーを防ぐ。
  if (props.lectures) {
    pageLength = Math.ceil(props.lectures.length / displayLecturesLength);
    displayLectures.value = props.lectures.slice(
      displayLecturesLength * (pageNumber.value - 1),
      displayLecturesLength * pageNumber.value
    );
    console.log(displayLectures);
  }
};

updateDisplayLectures(); // 初回の更新
watch(pageNumber, () => updateDisplayLectures()); // ページネーション時の更新
// propsが更新されたときの更新
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
