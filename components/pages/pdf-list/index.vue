<template>
  <UiHeader></UiHeader>
  <div v-if="total">
    <v-list v-for="pdf in pdfs" :key="pdf.id" class="mx-10 my-5">
      <v-list-item
        :title="type2ja(pdf.type ? pdf.type : 'other')"
        :subtitle="pdf.id"
        link
        border
        @click="openPdf(pdf.id)"
      ></v-list-item>
    </v-list>
    <!-- ページネーション -->
    <UiPagination
      v-model:pageNumber="pageNumber"
      :length="pageLength"
      class="mt-5"
    ></UiPagination>
    <!-- 詳細情報用のモーダル -->
    <pdfDetailModal
      v-if="showDetail && detailPdfId !== undefined"
      @close="closePdfDetail"
      :pdf="pdfs[detailPdfId]"
    ></pdfDetailModal>
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
  import { Pdf as PdfType } from "~~/api/@types";
  import { useFileType } from "~~/entities/pastExam";

  const client = useClient();

  // クエリパラメータの取得
  const route = useRoute();
  const exam_id =
    typeof route.params.id == "string" ? route.params.id : route.params.id[0];

  // pdf情報の取得
  const total = ref<number>(0);
  const pdfs = ref<PdfType[]>([]);
  const isLoading = ref<boolean>(true);
  const isError = ref<boolean>(false);

  client.exams
    ._exam_id(exam_id)
    .files.$get()
    .then(async (res) => {
      pdfs.value = res.pdfs ?? [];
      total.value = res.total!;
      isLoading.value = false;
      isError.value = false;
      console.log("pdfs: ", res);
    })
    .catch((err) => {
      console.error(err);
      isError.value = true;
    });

  /* pdfの詳細表示 */
  const showDetail = ref(false); // モーダルを表示するか
  const detailPdfId = ref<number | undefined>(undefined);
  const type2ja = useFileType().convertEn2Ja;
  const openPdf = (fileId: string | undefined) => {
    if (fileId === undefined) return;
    showDetail.value = true;
    client.files
      ._fileid(fileId)
      .$get()
      .then((res) => {
        console.log("res: ", res);
      });
  };

  const closePdfDetail = () => {
    showDetail.value = false;
  };
</script>
