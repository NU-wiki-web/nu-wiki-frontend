<template>
  <h1>Hello world!</h1>
  <p>this is nu-wiki!</p>

  <v-btn class="p-10" @click="onClick">vuetifyです！！</v-btn>
  <v-btn class="p-10" @click="onClickDelete">hogeを消す</v-btn>
  <p v-for="t in text">
    <span class="m-2 text-yellow-500">{{ t }}</span>
  </p>
</template>

<script lang="ts">
import { text } from "stream/consumers";
import { defineComponent, ref, Ref } from "vue";

export default defineComponent({
  setup() {
    const text: Ref<String[]> = ref([]);
    const functions = {
      onClick() {
        text.value = [...text.value, "hoge"];
      },
      onClickDelete(){
        text.value = []
      }
    };

    return {
      text,
      ...functions,
    };
  },
});
</script>
