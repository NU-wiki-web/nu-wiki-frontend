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
    <pdfDetailModal v-if="showDetail" @close="closePdfDetail">
      <!-- タイトルのスロットコンテンツ -->
      <h3>{{ pdfDetailData.value["name"] }}</h3>
      {{ pdfDetailData.value["file_id"] }}
    </pdfDetailModal>
  </div>
</template>

<script setup lang="ts">
import pdfDetailModal from "./pdfDetailModal.vue";

const { data: pdfs, error } = useFetch(
  "https://8d0okqs9rh.execute-api.ap-northeast-1.amazonaws.com/dev/files"
);

console.log(pdfs);
console.error(error);

/* pdfの詳細表示 */
const showDetail = ref(true);  // モーダルを表示するか
const pdfDetailData = ref({});  // pdfの詳細情報

function openPdfDetail(file_id: Number) {
  showDetail.value = true;

  // TODO: file_idからpdfの詳細データをバックから受け取る
  const { data: pdf_detail, error } = useFetch(
    `https://qsdpsf0myh.execute-api.ap-northeast-1.amazonaws.com/dev/detail/${file_id}`
  );
  console.log(pdf_detail);
  
  pdfDetailData.value = pdf_detail;
}

function closePdfDetail() {
  showDetail.value = false;
}
</script>
