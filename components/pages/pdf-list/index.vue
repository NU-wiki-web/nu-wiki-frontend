<template>
  <UiHeader></UiHeader>
  <div v-if="total">
    <div class="bg-nu-teritary p-8 text-white">
      <h1 class="text-2xl">
        <span class="font-bold">
          "{{ lecture?.lectureName }}({{ lecture?.teacherName }}先生)
          {{ exam?.year }}年度{{ termType2ja(exam?.type!) }}"
        </span>
        のPDF一覧
      </h1>
    </div>
    <v-list v-for="pdf in pdfs" :key="pdf.id" class="mx-10 my-5">
      <v-list-item
        :title="pdf.name ?? '' + type2ja(pdf.type ? pdf.type : 'other')"
        link
        border
        @click="showDetailModal(pdf.id)"
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
      v-if="showDetail && fileObjectURL !== undefined"
      @close="closePdfDetail"
      :fileURL="fileObjectURL"
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
  import { Exam, Lecture, Pdf as PdfType } from "~~/api/@types";
  import { useFileType, usePastExamType } from "~~/entities/pastExam";

  const client = useClient();

  // クエリパラメータの取得
  const route = useRoute();
  const lecture_id =
    typeof route.params.lecture_id == "string"
      ? route.params.lecture_id
      : route.params.lecture_id[0];
  const exam_id =
    typeof route.params.exam_id == "string"
      ? route.params.exam_id
      : route.params.exam_id[1];

  // pdf情報の取得
  const total = ref<number>(0);
  const pdfs = ref<PdfType[]>([]);
  const isLoading = ref<boolean>(true);
  const isError = ref<boolean>(false);
  const fileObjectURL = ref<string>();
  const showDetail = ref<boolean>();
  const showingPdfId = ref<string>();
  const lecture = ref<Lecture>();
  const exam = ref<Exam>();

  client.lectures.$get().then((res) => {
    // NOTE: GET /lectures/:lecture_idってなんでないんだっけ？
    lecture.value = res.lectures.find((l) => l.id === lecture_id);
    // NOTE: GET /exams/:exam_idってなんでないんだっけ？
    exam.value = lecture.value?.exams?.find((e) => e.id === exam_id);
  });

  client.exams
    ._exam_id(exam_id)
    .files.$get()
    .then(async (res) => {
      pdfs.value = res.pdfs ?? [];
      total.value = res.total!;
      isLoading.value = false;
      isError.value = false;
    })
    .catch((err) => {
      console.error(err);
      isError.value = true;
    });

  /* pdfの詳細表示 */
  const type2ja = useFileType().convertEn2Ja;
  const termType2ja = usePastExamType().convertEn2Ja;
  const showDetailModal = (fileId: string | undefined) => {
    if (fileId === undefined) return;
    client.files
      ._fileid(fileId)
      .$get()
      .then((res) => {
        fileObjectURL.value = URL.createObjectURL(res);
        showDetail.value = true;
        showingPdfId.value = fileId;
      });
  };
  const closePdfDetail = () => (showDetail.value = false);
</script>
