<template>
  <UiHeader></UiHeader>
  <UiTemplatesSearch
    v-model:department="department"
    v-model:grade="grade"
    v-model:term="term"
    v-model:year="year"
    @click="search"
  ></UiTemplatesSearch>
  <div v-if="isLoading" class="mt-10 flex items-center justify-center">
    <UiLoading></UiLoading>
  </div>
  <div v-else-if="isEroor" class="mt-10 flex items-center justify-center">
    予期せぬエラーが発生しました。もう一度お試しください。
  </div>
  <div v-else>
    <UiTemplatesLectureList
      v-model:lectures="lectures"
      :handleClick="pushDetailPage"
    ></UiTemplatesLectureList>
  </div>
</template>

<script setup lang="ts">
import { useAwait, useClient } from "~/util/api/useApi";
import { LectureType } from "types/lecture";

const client = useClient();

const lectures = ref<[LectureType]>();
const isLoading = ref<boolean>(true);
const isEroor = ref<boolean>(false);

client.lectures
  .$get()
  .then(async (res) => {
    lectures.value = await res.lectures;
    isLoading.value = false;
    isEroor.value = false;
  })
  .catch((err) => {
    console.error(err);
    isEroor.value = true;
  });

const department = ref<string>();
const grade = ref<string>();
const term = ref<string>();
const year = ref<number>();
const word = ref<string>();

const search = async function (searchWord: string | undefined) {
  word.value = searchWord;
};

watch([department, grade, term, year, word], async function () {
  isLoading.value = true;
  client.lectures.search
    .post({
      body: {
        department_id: 8, // 要検討
        grade: grade.value, // stringに直す必要がある
        term: term.value,
        year: year.value,
        word: word.value,
      },
    })
    .then(async (res) => {
      lectures.value = await res.body.lectures;
      isLoading.value = false;
      isEroor.value = false;
    })
    .catch((err) => {
      console.error(err);
      isEroor.value = true;
    });
});

const pushDetailPage = function (id: number) {
  navigateTo(`/pdf-list/${id}`);
};
</script>
