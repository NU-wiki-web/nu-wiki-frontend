<template>
  <UiHeader />
  <div class="h-[30vh] w-full bg-[#4a8a8a] pt-[5vh]">
    <UiSignupStepBar :stepNumber="2" />
  </div>

  <v-card
    class="mx-auto -mt-[calc(20vh-90px)] mb-12 min-w-[90vw] max-w-[90vw] md:min-w-[370px] md:max-w-[370px] 2xl:min-w-[460px] 2xl:max-w-[460px]"
  >
    <div class="d-flex pa-0 mt-10 mb-8 justify-center text-2xl text-[#006E4F]">
      メールアドレス認証
    </div>
    <div class="mx-auto w-4/5">
      <div class="my-2 text-base md:text-lg">
        <b>***@s.mail.nagoya-u.ac.jp</b>
        宛てに、認証用パスワードを送信しました。
      </div>
      <div class="my-2 text-base md:text-lg">
        本文に記載されているパスワードを入力して、本人確認を完了してください。
      </div>
    </div>
    <div class="mx-auto my-4 w-4/5">
      <UiOtpInput v-model="data" :fields="6" />
      <div class="pt-2 text-center text-gray-500">
        {{ data ? data : "数字6桁で入力してください" }}
      </div>
    </div>

    <div class="mt-2 mb-6 text-center">
      <UiIconButton :buttonTitle="'送信'" :buttonIcon="'mdi-lock'" />
    </div>

    <div class="mx-auto w-4/5">
      <v-divider></v-divider>
    </div>

    <div class="mx-auto w-4/5">
      <div class="mt-6 mb-4 text-center">
        <a href="/signup/auth"><u>パスワードを再送する</u></a>
      </div>
      <div class="mt-4 mb-8 text-center">
        <a href="/signup"><u>メールアドレスを変更する</u></a>
      </div>
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
