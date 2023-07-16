<template>
  <v-list-item :title="name" :subtitle="year" link border></v-list-item>
</template>

<script setup lang="ts">
import { years } from '~~/entities/years';

defineProps(["file_id", "name", "year"]);
interface Props {
  file_id: number;
  name: String;
  year: Date;
}
</script>
