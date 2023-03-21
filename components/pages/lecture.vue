<template>
  <UiHeader></UiHeader>
  <UiTemplatesSearch
    v-model:department="department"
    v-model:grade="grade"
    v-model:term="term"
    v-model:year="year"
    @click="search"
  ></UiTemplatesSearch>
  <UiTemplatesLectureList
    v-model:lectures="lectures"
    :handleClick="pushDetailPage"
  ></UiTemplatesLectureList>
</template>

<script setup lang="ts">
import { useAwait, useClient } from "~/util/api/useApi";
import { LectureType } from "types/lecture";

const client = useClient();

let lectures = ref<[LectureType]>();

client.lectures
  .$get()
  .then((res) => {
    lectures.value = res.lectures;
  })
  .then((err) => console.error(err));

const department = ref<string>();
const grade = ref<string>();
const term = ref<string>();
const year = ref<number>();
const word = ref<string>();

const search = async function (searchWord: string | undefined) {
  word.value = searchWord;
};

watch([department, grade, term, year, word], async function () {
  const { res, error, loading } = await useAwait(() => {
    return client.lectures.search.post({
      body: {
        department_id: 8, // 要検討
        grade: grade.value, // stringに直す必要がある
        term: term.value,
        year: year.value,
        word: word.value,
      },
    });
  });
  lectures.value = res.value.body.lectures;
});

const pushDetailPage = function (id: number) {
  navigateTo(`/pdf-list/${id}`);
};
</script>
