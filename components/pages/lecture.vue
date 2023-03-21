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

const lectures = ref<[LectureType]>();

const { res, error, loading } = await useAwait(() => {
  const client = useClient();
  return client.lectures.$get();
});
lectures.value = res.value;

const department = ref<string>();
const grade = ref<string>();
const term = ref<string>();
const year = ref<number>();

const search = async function (searchWord: string | undefined) {
  const { res, error, loading } = await useAwait(() => {
    const client = useClient();
    return client.lectures.search.post({
      body: {
        department_id: 8,
        grade: 2,
        term: "秋2",
        year: 2016,
        word: searchWord,
      },
    });
  });
  lectures.value = res.value.body;
};

const pushDetailPage = function (id: number) {
  navigateTo(`/pdf-list/${id}`);
};
</script>
