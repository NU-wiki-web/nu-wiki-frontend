<template>
  <v-list-item :title="name" link border></v-list-item>
</template>

<script setup lang="ts">
defineProps(["file_id", "name"]);
interface Props {
  file_id: number;
  name: String;
}
</script>
