<template>
  <UiHeader></UiHeader>
  <div v-if="total">
    <div>
      {{ $route._exam_id }}<br>
      {{ total }}件見つかりました。
    </div>
    <v-list v-for="pdf in pdfs" :key="pdf.file_id">
      <UiPdfListItem :id="pdf.file_id" :name="pdf.name"></UiPdfListItem>
      <UiPagination
        v-model:pageNumber="pageNumber"
        :length="pageLength"
        class="mt-5"
      ></UiPagination>
    </v-list>
  </div>
  <div v-if="isLoading" class="mt-10 flex items-center justify-center">
    <UiLoading></UiLoading>
  </div>
  <div v-else-if="isError" class="mt-10 flex items-center justify-center">
    予期せぬエラーが発生しました。もう一度お試しください。
  </div>
</template>

<script setup lang="ts">
import { useClient } from "~/util/api/useApi";
import { PdfType } from "~~/types/pdf";

const client = useClient();

const total = ref<number>();
const pdfs = ref<PdfType[]>([]);
const isLoading = ref<boolean>(true);
const isError = ref<boolean>(false);

// クエリパラメータの取得
const route = useRoute();
const pdf_id = route.path;
console.log("path: ", pdf_id);

client.exams
  ._exam_id()
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

const pushDetailPage = function (id: number) {
  navigateTo(`/pdf-list/${id}`);
};
</script>
