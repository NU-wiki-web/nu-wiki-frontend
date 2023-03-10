<template>
  <div style="width: 400px">
    <UiFileUploadButton
      :buttonTitle="'pdfファイルを選択'"
      :buttonIcon="'mdi-cloud-upload'"
      :accept="'application/pdf'"
      v-model:file="file"
    />
    <UiButton @click="onUpload"> アップロード </UiButton>
  </div>
</template>

<script setup lang="ts">
import { useAwait, apiClient } from "~/util/api/useApi";

const file = ref<File>();

const onUpload = async () => {
  console.log(file.value);
  if (!file.value) return;
  await useAwait(() => apiClient.file.$post({ body: file.value! }));
};
</script>
