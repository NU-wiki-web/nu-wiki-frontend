<template>
  <v-list-item :title="title" :subtitle="subtitle" elevation="1"></v-list-item>
</template>

<script setup lang="ts">
interface Props {
  id: number;
  title: string;
  subtitle: string;
}
const props = defineProps<Props>();
</script>
