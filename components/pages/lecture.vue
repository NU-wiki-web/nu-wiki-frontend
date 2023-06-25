<template>
  <UiHeader></UiHeader>
  <UiTemplatesSearch
    v-model:departmentId="departmentId"
    v-model:grade="grade"
    v-model:term="term"
    v-model:year="year"
    @click="search"
  ></UiTemplatesSearch>
  <div v-if="isLoading" class="mt-10 flex items-center justify-center">
    <UiLoading></UiLoading>
  </div>
  <div v-else-if="isError" class="mt-10 flex items-center justify-center">
    予期せぬエラーが発生しました。もう一度お試しください。
  </div>
  <div v-else>
    <UiTemplatesLectureList
      v-model:lectures="lectures"
    ></UiTemplatesLectureList>
  </div>
</template>

<script setup lang="ts">
import { useClient } from "~/util/api/useApi";
import { LectureType } from "types/lecture";
import { GradeType } from "~~/types/grade";
import { TermType } from "~~/types/term";

const client = useClient();

const lectures = ref<LectureType[]>([]);
const isLoading = ref<boolean>(true);
const isError = ref<boolean>(false);

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

// const pushDetailPage = function (id: number) {
//   navigateTo(`/pdf-list/${id}`);
// };
</script>
