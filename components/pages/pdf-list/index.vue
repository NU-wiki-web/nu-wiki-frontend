<template>
  <UiHeader></UiHeader>
  <div v-if="total">
    <div class="bg-nu-teritary p-8 text-white">
      <p class="m-2 text-3xl">'{{ route.params.id }}'のPDF一覧</p>
      <p class="m-2 text-lg">{{ total }}件見つかりました。</p>
    </div>
    <v-list v-for="pdf in pdfs" :key="pdf.file_id">
      <UiPdfListItem
        :file_id="pdf.file_id"
        :name="pdf.name"
        @click="openPdfDetail(0)"
        class="m-10 rounded"
      ></UiPdfListItem>
    </v-list>
    <!-- ページネーション -->
    <UiPagination
      v-model:pageNumber="pageNumber"
      :length="pageLength"
      class="mt-5"
    ></UiPagination>
    <!-- 詳細情報用のモーダル -->
    <pdfDetailModal v-if="showDetail" @close="closePdfDetail">
      <!-- タイトルのスロットコンテンツ -->
      <template v-slot:file_name>
        <div>{{ pdfs[detailPdfId].name }}</div>
      </template>
      <!-- urlとリンク -->
      <template v-slot:url>
        <div
          class="mr-2 mb-2 rounded-lg bg-nu-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <button
            @click="openExternalLink(pdfa[detailPdfId].url)"
          >
            ファイルを開く
          </button>
        </div>
      </template>
    </pdfDetailModal>
  </div>
  <div v-if="isLoading" class="mt-10 flex items-center justify-center">
    <UiLoading></UiLoading>
  </div>
  <div v-else-if="isError" class="mt-10 flex items-center justify-center">
    予期せぬエラーが発生しました。もう一度お試しください。
  </div>
</template>

<script setup lang="ts">
import pdfDetailModal from "./pdfDetailModal.vue";
import { useClient } from "~/util/api/useApi";
import { PdfType } from "~~/types/pdf";

const client = useClient();

const total = ref<number>(0);
const pdfs = ref<PdfType[]>([]);
const isLoading = ref<boolean>(true);
const isError = ref<boolean>(false);

// クエリパラメータの取得
const route = useRoute();
const exam_id = Number(route.params.id);
console.log("exam_id: ", exam_id);

client.exams
  ._exam_id(exam_id)
  .files.$get()
  .then(async (res) => {
    pdfs.value = await res.pdfs;
    total.value = res.total;
    isLoading.value = false;
    isError.value = false;
  })
  .catch((err) => {
    console.error(err);
    isError.value = true;
  });

/* pdfの詳細表示 */
const showDetail = ref(false); // モーダルを表示するか
const detailPdfId = ref<number | undefined>(undefined);

function openPdfDetail(file_id: number) {
  showDetail.value = true;
  detailPdfId.value = file_id;
}

function closePdfDetail() {
  showDetail.value = false;
}

function openExternalLink(url: string) {
  window.open(url, "_blank");
}
</script>
