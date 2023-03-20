<template>
  <UiHeader></UiHeader>
  <UiTemplatesSearch
    v-model:department="department"
    v-model:grade="grade"
    v-model:term="term"
    v-model:year="year"
  ></UiTemplatesSearch>
  <UiTemplatesLectureList
    :lectures="lectures"
    :handleClick="pushDetailPage"
  ></UiTemplatesLectureList>
</template>

<script setup lang="ts">
import { useAwait, useClient } from "~/util/api/useApi";

let lectures;
const { res, error, loading } = await useAwait(() => {
  const client = useClient();
  return client.lectures.$get();
});

lectures = res.value;

const department = ref<string>();
const grade = ref<string>();
const term = ref<string>();
const year = ref<number>();

const pushDetailPage = function (id: number) {
  navigateTo(`/pdf-list/${id}`);
};
</script>
