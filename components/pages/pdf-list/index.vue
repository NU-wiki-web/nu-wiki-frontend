<template>
  <UiHeader></UiHeader>
  <div v-if="total">
    <v-list v-for="pdf in pdfs" :key="pdf.file_id" class="mx-10 my-5">
      <UiPdfListItem
        :file_id="pdf.file_id"
        :name="pdf.name"
        :year="pdf.created_at"
        @click="openPdfDetail(0)"
        class="m-2 rounded text-xl"
      >
      </UiPdfListItem>
    </v-list>
    <!-- ページネーション -->
    <UiPagination
      v-model:pageNumber="pageNumber"
      :length="pageLength"
      class="mt-5"
    ></UiPagination>
    <!-- 詳細情報用のモーダル -->
    <pdfDetailModal
      v-if="showDetail"
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
  import { PdfType } from "~~/types/pdf";
  import { LectureType } from "types/lecture";

  const client = useClient();

  // クエリパラメータの取得
  const route = useRoute();
  const exam_id = Number(route.params.id);
  console.log("exam_id: ", exam_id);

  // pdf情報の取得
  const total = ref<number>(0);
  const pdfs = ref<PdfType[]>([]);
  const isLoading = ref<boolean>(true);
  const isError = ref<boolean>(false);

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

  // 講義情報の取得
  const lecture = ref<LectureType>();

  // client.lectures
  //   ._exam_id(exam_id)
  //   .$get()
  //   .then(async (res) => {
  //     lecture.value = res;
  //     isLoading.value = false;
  //     isError.value = false;
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     isError.value = true;
  //   });

  /* pdfの詳細表示 */
  const showDetail = ref(false); // モーダルを表示するか
  const detailPdfId = ref<number | undefined>(undefined);

  const openPdfDetail = (file_id: number) => {
    showDetail.value = true;
    detailPdfId.value = file_id;
  };

  const closePdfDetail = () => {
    showDetail.value = false;
  };
</script>
