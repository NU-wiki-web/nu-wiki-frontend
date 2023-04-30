<template>
  <v-list-item :title="name" link></v-list-item>
  あああああ
</template>

<script setup lang="ts">
defineProps(["file_id", "name"]);
interface Props {
  file_id: number;
  name: String;
}
</script>
