<template>
  <div>
    <h1>PDF一覧</h1>
    <div v-if="error">PDFの取得に失敗しました。もう一度お試しください。</div>
    <v-list v-for="pdf in pdfs" :key="pdf.file_id" border>
      <UiPdfListItem :file_id="pdf.file_id" :name="pdf.name"></UiPdfListItem>
    </v-list>
  </div>
</template>

<script setup lang="ts">
// 参考: https://reffect.co.jp/vue/nuxt3#Data_Fetching
const { data: pdfs, error } = useFetch(
  "https://9qlhq2c3rf.execute-api.ap-northeast-1.amazonaws.com/dev/files"
);
</script>
