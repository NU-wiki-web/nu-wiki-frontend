<template>
  <UiHeader />
  <div class="h-[30vh] w-full bg-[#4a8a8a] pt-[5vh]">
    <UiSignupStepBar :stepNumber="2" />
  </div>

  <v-card
    class="mx-auto -mt-[calc(20vh-90px)] mb-12 min-w-[90vw] max-w-[90vw] md:min-w-[370px] md:max-w-[370px] 2xl:min-w-[460px] 2xl:max-w-[460px]"
  >
    <div class="d-flex pa-0 mt-10 mb-8 justify-center text-3xl text-[#006E4F]">
      メールアドレス認証
    </div>
    <div class="mx-auto w-4/5">
      <p>***@*.mail.nagoya-u.ac.jp 宛てに、認証用パスワードを送信しました。</p>
      <p>
        本文に記載されているパスワードを入力して、本人確認を完了してください。
      </p>
    </div>
    <div class="mx-auto w-4/5">
      <UiOtpInput v-model="data" :fields="6"></UiOtpInput>
      <div class="pt-5 text-center text-gray-500">{{ data }}</div>
    </div>

    <div class="mt-2 mb-8 text-center">
      <UiIconButton
        :buttonTitle="'メール認証'"
        :buttonIcon="'mdi-email-outline'"
      />
    </div>
  </v-card>
</template>

<script setup lang="ts">
const data = ref(null);
</script>

<style scoped>
.v-text-field :deep() input {
  padding: 0 10px;
  min-height: 38px;
}
.v-text-field :deep() div {
  padding: 0;
}
</style>
