<template>
  <div class="flex flex-col items-center space-y-2">
    <div class="space-x-2">
      <button
        class="cursor-pointer rounded-md bg-nu-primary p-1 text-white"
        @click="page = page > 1 ? page - 1 : page"
      >
        戻る
      </button>
      <span>{{ page }} / {{ pages }}</span>
      <button
        class="cursor-pointer rounded-md bg-nu-primary p-1 text-white"
        @click="page = page < pages ? page + 1 : page"
      >
        進む
      </button>
    </div>
    <VuePDF
      class="border border-nu-septenary"
      :pdf="pdf"
      :page="page"
      fit-parent
    />
  </div>
</template>
<script setup lang="ts">
  import { VuePDF, usePDF } from "@tato30/vue-pdf";

  interface Props {
    fileURL: string;
  }
  const props = defineProps<Props>();
  const page = ref<number>(1);
  const { pdf, pages } = usePDF(props.fileURL);
</script>
