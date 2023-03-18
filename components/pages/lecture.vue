<template>
  <UiHeader></UiHeader>
  <UiTemplatesSearch
    v-model:department="department"
    v-model:grade="grade"
    v-model:term="term"
    v-model:year="year"
  ></UiTemplatesSearch>
  <v-list>
    <UiListItem></UiListItem>
  </v-list>
  <UiPagination></UiPagination>
</template>

<script setup lang="ts">
const department = ref<string>();
const grade = ref<string>();
const term = ref<string>();
const year = ref<number>();
</script>
