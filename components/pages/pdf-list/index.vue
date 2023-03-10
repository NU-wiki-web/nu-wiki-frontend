<template>
  <div>
    <h1>PDF一覧</h1>
    <div v-if="error">PDFの取得に失敗しました。もう一度お試しください。</div>
    <v-list v-for="pdf in pdfs" :key="pdf.file_id" border>
      <UiPdfListItem
        :file_id="pdf.file_id"
        :name="pdf.name"
        @click="openPdfDetail(pdf.file_id)"
      ></UiPdfListItem>
    </v-list>
  </div>
</template>

<script setup lang="ts">
const { data: pdfs, error } = useFetch(
  "https://8d0okqs9rh.execute-api.ap-northeast-1.amazonaws.com/dev/files"
);

console.error(error);
function openPdfDetail(file_id: Number) {
  // TODO: file_idからpdfの詳細データをバックから受け取る
  console.log(file_id);
}
</script>