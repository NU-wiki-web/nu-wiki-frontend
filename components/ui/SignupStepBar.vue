<template>
  <div class="scale-100 space-y-1 2xl:scale-125">
    <div class="d-flex justify-center">
      <div
        v-bind:class="[
          props.stepNumber == 1
            ? 'circle d-flex items-center justify-center bg-white'
            : 'circle d-flex items-center justify-center border-2 border-solid border-white'
        ]"
      >
        <span
          v-bind:class="[
            props.stepNumber == 1
              ? 'text-2xl text-[#4a8a8a]'
              : 'text-2xl text-white'
          ]"
          >1</span
        >
      </div>
      <div class="mt-[24px] h-0.5 w-10 bg-white"></div>
      <div
        v-bind:class="[
          props.stepNumber == 2
            ? 'circle d-flex items-center justify-center bg-white'
            : 'circle d-flex items-center justify-center border-2 border-solid border-white'
        ]"
      >
        <span
          v-bind:class="[
            props.stepNumber == 2
              ? 'text-2xl text-[#4a8a8a]'
              : 'text-2xl text-white'
          ]"
          >2</span
        >
      </div>
      <div class="mt-[24px] h-0.5 w-10 bg-white"></div>
      <div
        v-bind:class="[
          props.stepNumber == 3
            ? 'circle d-flex items-center justify-center bg-white'
            : 'circle d-flex items-center justify-center border-2 border-solid border-white'
        ]"
      >
        <span
          v-bind:class="[
            props.stepNumber == 3
              ? 'text-2xl text-[#4a8a8a]'
              : 'text-2xl text-white'
          ]"
          >3</span
        >
      </div>
      <div class="mt-[24px] h-0.5 w-10 bg-white"></div>
      <div
        v-bind:class="[
          props.stepNumber == 4
            ? 'circle d-flex items-center justify-center bg-white'
            : 'circle d-flex items-center justify-center border-2 border-solid border-white'
        ]"
      >
        <span
          v-bind:class="[
            props.stepNumber == 4
              ? 'text-2xl text-[#4a8a8a]'
              : 'text-2xl text-white'
          ]"
          >4</span
        >
      </div>
    </div>
    <div class="d-flex justify-center">
      <div class="mr-[1.5rem]">
        <span class="text-white">新規登録</span>
      </div>
      <div class="mr-[1.2rem]">
        <span class="text-white">メール認証</span>
      </div>
      <div class="mr-[2.25rem]">
        <span class="text-white">情報を入力</span>
      </div>
      <div class="mr-[0.85rem]">
        <span class="text-white">完了</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // プロップス
  interface Props {
    stepNumber?: number;
  }

  // プロップスのデフォルト値
  const props = withDefaults(defineProps<Props>(), {
    stepNumber: 1
  });
</script>

<style scoped>
  .circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-style: solid;
    border-color: #ffffff;
  }
</style>
