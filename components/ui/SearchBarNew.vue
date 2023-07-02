<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8">
      <UiInputBar @click="onClick" placeholder="講義名を入力" label="講義名" />
    </v-col>
    <v-col cols="2" class="hidden sm:block" />
  </v-row>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8">
      <UiInputBar
        @click="onClick"
        placeholder="担当教員名を入力"
        label="教授名"
      />
    </v-col>
    <v-col cols="2" class="flex items-center justify-center sm:justify-end">
      <v-btn
        elevation="2"
        color="#006E4F"
        class="w-full md:w-1/2"
        @click="onClick"
      >
        <span class="font-normal text-white">検索</span>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
interface Emits {
  (e: "click", text: string | undefined): void;
}
const emit = defineEmits<Emits>();

const text = ref<string | undefined>();

const onClick = function () {
  emit("click", text.value);
};
</script>
