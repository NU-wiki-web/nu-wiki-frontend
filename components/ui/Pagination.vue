<template>
  <v-pagination
    v-bind="pageNumber"
    :length="length"
    rounded="circle"
    active-color="#006E4F"
    @update:modelValue="updatePageNumber"
  ></v-pagination>
</template>

<script setup lang="ts">
  interface Props {
    pageNumber: number;
    length: number;
  }

  interface Emits {
    (e: "update:pageNumber", pageNumber: number): void;
  }

  const props = defineProps<Props>();
  const emit = defineEmits<Emits>();

  const updatePageNumber = function (newPageNumber: number) {
    emit("update:pageNumber", newPageNumber);
  };
</script>
