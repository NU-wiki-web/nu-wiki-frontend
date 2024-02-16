<template>
  <UiHeader />
  <div class="w-full bg-nu-teritary pb-[calc(5vh+60px)] pt-12">
    <UiSignupStepBar :stepNumber="2" />
  </div>

  <v-card class="mx-auto -mt-16 mb-12 w-11/12 md:w-96">
    <div class="flex h-16 items-end justify-center text-2xl text-primary">
      メールアドレス認証
    </div>
    <div class="mx-auto my-4 w-5/6">
      <div class="mb-2">
        <b>***@s.mail.nagoya-u.ac.jp</b>
        宛てに、認証用パスワードを送信しました。
      </div>
      <div class="mb-2">
        本文に記載されているパスワードを入力して、本人確認を完了してください。
      </div>
    </div>
    <div class="mx-auto my-4 w-5/6">
      <UiOtpInput v-model="password" :fields="6" />
    </div>

    <div class="my-6 text-center">
      <UiIconButton
        :buttonTitle="'送信'"
        :buttonIcon="'mdi-lock'"
        :disabled="password.length !== 6"
        :onClick="sendOTP"
      />
    </div>

    <div class="mx-auto w-4/5">
      <v-divider></v-divider>
    </div>

    <div class="mx-auto w-4/5">
      <div class="mb-4 mt-6 text-center">
        <a href="/signup/auth"><u>パスワードを再送する</u></a>
      </div>
      <div class="mb-8 mt-4 text-center">
        <a href="/signup"><u>メールアドレスを変更する</u></a>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
  import { useClient } from "~~/util/api/useApi";
  const client = useClient();
  const password = ref<string>("");
  const otp_valid = RegExp(/^[0-9]{6}$/);
  const sendOTP = function () {
    client.signup.auth
      .post({
        body: {
          oneTimePassword: password.value
        }
      })
      .then((res) => {
        const router = useRouter();
        router.push("/signup/register");
      })
      .catch((err) => {
        console.error(err);
      });
  };
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
