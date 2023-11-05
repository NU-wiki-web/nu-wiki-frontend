<template>
  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div
      class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      @click.self="$emit('close')"
    >
      <div
        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl"
      >
        <div class="bg-nu-quaternary px-5 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <h3 class="text-2xl font-semibold leading-6 text-gray-900">
              {{ pdf.name }}
            </h3>
          </div>
        </div>
        <div class="p-5 text-lg">
          <p>
            <v-icon icon="mdi-account" />
            {{ pdf.user_id }}
          </p>
          <p>
            <v-icon icon="mdi-calendar-blank" />
            作成日
            {{ formatDate(pdf.created_at) }}
          </p>
          <p>
            <v-icon icon="mdi-calendar-badge" />
            更新日
            {{ formatDate(pdf.updated_at) }}
          </p>
        </div>
        <div class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            @click="openExternalLink(pdf.name)"
            class="mb-2 mr-2 rounded-lg bg-nu-primary px-5 py-2.5 text-sm font-bold text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            ファイルを開く
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PdfType } from "~~/types/pdf";

  defineProps(["pdf"]);
  interface Props {
    pdf: PdfType;
  }

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
</script>
