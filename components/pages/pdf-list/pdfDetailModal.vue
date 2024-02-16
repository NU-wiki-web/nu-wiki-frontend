<template>
  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div
      class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      @click.self="$emit('close')"
    >
      <div
        class="relative transform rounded-lg border bg-white p-2 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl"
      >
        <UiPDFViewer :fileURL="fileURL"></UiPDFViewer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    fileURL: string;
    title: string;
  }
  const props = defineProps<Props>();
</script>
