<template>
  <div class="fixed inset-0 z-10 h-screen">
    <div
      class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      @click.self="$emit('close')"
    >
      <div
        class="relative transform rounded-lg bg-white shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl"
      >
        <div class="bg-nu-quaternary px-5 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <h3 class="text-2xl font-semibold leading-6 text-gray-900">
              {{ lecture.lectureName + "のテスト一覧" }}
            </h3>
          </div>
        </div>
        <div
          v-if="lecture.exams && lecture.exams?.length > 0"
          class="mx-auto flex flex-wrap justify-center overflow-y-auto"
        >
          <div
            v-for="exam in lecture.exams"
            class="m-2 flex h-16 w-2/5 cursor-pointer rounded-md shadow-md hover:shadow-lg"
          >
            <div class="flex w-1/2 items-center justify-center rounded-l-md">
              {{ exam.year }}
            </div>
            <div
              class="flex w-1/2 items-center justify-center rounded-r-md bg-nu-primary text-white"
            >
              {{ examTypeJa(exam.type as PastExamType) }}
            </div>
          </div>
        </div>
        <div v-else class="mx-auto flex justify-center p-16">
          テストがありません
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Lecture } from "~~/api/@types";
  import { PastExamType, usePastExamType } from "~~/entities/pastExam";
  import { PdfType } from "~~/types/pdf";

  interface Props {
    pdf: PdfType;
    lecture: Lecture;
  }
  defineProps<Props>();

  const formatDate = (date: string) => {
    let [y, m, d] = date.split("-");
    return `${y}年${parseInt(m)}月${parseInt(d)}日`;
  };

  const getUrl = (name: string) => {
    let url = `https://sample.sample/${name}`; // ダミーのURL
    return url;
  };

  const openExternalLink = (name: string) => {
    let url = getUrl(name);
    window.open(url, "_blank");
  };

  const examTypeJa = usePastExamType().convertEn2Ja;
</script>
