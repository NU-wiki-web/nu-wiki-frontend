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
    <!-- 詳細情報用のモーダル -->
    <pdfDetailModal v-if="showDetail" @close="closePdfDetail">
      <!-- タイトルのスロットコンテンツ -->
      <template v-slot:file_name>
        <div v-if="pdfDetailError.value">情報がありません</div>
        <div v-else>{{ pdfDetailData.value.name }}</div>
      </template>
      <!-- urlとリンク -->
      <template v-slot:url>
        <div
          v-if="!pdfDetailError.value"
          class="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <button @click="openExternalLink(pdfDetailData.value.url)">
            ファイルを開く
          </button>
        </div>
      </template>
    </pdfDetailModal>
  </div>
</template>

<script setup lang="ts">
import pdfDetailModal from "./pdfDetailModal.vue";

const { data: pdfs, error } = useFetch(
  "http://nu-wiki-mock-pdf-detail.shuttleapp.rs/list"
);

console.log(pdfs);
console.error(error);

/* pdfの詳細表示 */
const showDetail = ref(false); // モーダルを表示するか
const pdfDetailData = ref({}); // pdfの詳細情報
const pdfDetailError = ref(); // pdfの詳細情報取得時のエラー

function openPdfDetail(file_id: Number) {
  showDetail.value = true;

  // TODO: file_idからpdfの詳細データをバックから受け取る
  const { data: pdf_detail, error: pdf_detail_error } = useFetch(
    `http://nu-wiki-mock-pdf-detail.shuttleapp.rs/detail/${file_id}`
  );

  pdfDetailData.value = pdf_detail;
  pdfDetailError.value = pdf_detail_error;

  console.log(pdf_detail_error);
}

function closePdfDetail() {
  showDetail.value = false;
}

function openExternalLink(url: string) {
  window.open(url, "_blank");
}
</script>
