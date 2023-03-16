<template>
  <UiSelect :label="label" :items="items" :icon="icon" v-model:selected="aaa"></UiSelect>
  親：{{ aaa }}
</template>

<script setup lang="ts">
const label = "aa";
const items = ["a", "i", "u", "e", "o"];
const icon = "mdi-vuetify";

const aaa = ref<string | undefined>(undefined);
</script>
