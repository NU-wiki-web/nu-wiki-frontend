<template>
  <UiHeader></UiHeader>
  <div v-if="total">
    <v-list v-for="pdf in pdfs" :key="pdf.file_id">
      <UiPdfListItem
      :id="pdf.file_id"
      :name="pdf.name"
    ></UiPdfListItem>
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
import { LectureType } from "types/lecture";
import { PdfType } from "~~/types/pdf";
import { GradeType } from "~~/types/grade";
import { TermType } from "~~/types/term";

const client = useClient();

const lectures = ref<LectureType[]>([]);
const total = ref<number>();
const pdfs = ref<PdfType[]>([]);
const isLoading = ref<boolean>(true);
const isError = ref<boolean>(false);

client.exams
  ._exam_id(1)
  .files.
  $get()
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

client.lectures
  .$get()
  .then(async (res) => {
    lectures.value = await res.lectures;
    isLoading.value = false;
    isError.value = false;
  })
  .catch((err) => {
    console.error(err);
    isError.value = true;
  });


const departmentId = ref<number | undefined>(undefined);
const grade = ref<GradeType | undefined>(undefined);
const term = ref<TermType | undefined>(undefined);
const year = ref<number | undefined>(undefined);
const word = ref<string | undefined>(undefined);

const search = async function (searchWord: string | undefined) {
  word.value = searchWord;
};

watch([departmentId, grade, term, year, word], async function () {
  isLoading.value = true;
  client.lectures.search
    .post({
      body: {
        departmentId: departmentId.value,
        grade: grade.value,
        term: term.value,
        year: year.value,
        word: word.value,
      },
    })
    .then(async (res) => {
      lectures.value = await res.body.lectures;
      isLoading.value = false;
      isError.value = false;
    })
    .catch((err) => {
      console.error(err);
      isError.value = true;
    });
});

const pushDetailPage = function (id: number) {
  navigateTo(`/pdf-list/${id}`);
};
</script>
