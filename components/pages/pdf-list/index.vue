<template>
  <div>
    <v-list v-for="pdf in samplePdfs" :key="pdf.file_id" border>
      <UiPdfListItem :file_id="pdf.file_id" :name="pdf.name"></UiPdfListItem>
    </v-list>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const samplePdfs = reactive([
  {
    file_id: 1,
    name: "有機化学3",
  },
  {
    file_id: 2,
    name: "実験安全学",
  },
]);
</script>
