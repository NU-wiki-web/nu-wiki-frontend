<template>
  <UiHeader />
  <div class="w-full bg-[#4a8a8a] pt-[5vh] pb-[calc(5vh+60px)]">
    <UiSignupStepBar :stepNumber="2" />
  </div>

  <v-card
    class="mx-auto -mt-[60px] mb-12 min-w-[90vw] max-w-[90vw] md:min-w-[370px] md:max-w-[370px] 2xl:min-w-[460px] 2xl:max-w-[460px]"
  >
    <div
      class="pa-0 flex h-[60px] max-h-[70px] items-end justify-center text-xl text-[#006E4F]"
    >
      メールアドレス認証
    </div>
    <div class="mx-auto my-4 w-[85%]">
      <div class="mb-2">
        <b>***@s.mail.nagoya-u.ac.jp</b>
        宛てに、認証用パスワードを送信しました。
      </div>
      <div class="mb-2">
        本文に記載されているパスワードを入力して、本人確認を完了してください。
      </div>
    </div>
    <div class="mx-auto my-4 w-[85%]">
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
  import { useClient } from "~~/util/api/useApi";
  const client = useClient();
  const password = ref<string>("");
  const otp_valid = RegExp(/^[0-9]{6}$/);
  const sendOTP = function () {
    console.log(password.value);
    client.signup.auth
      .post({
        body: {
          oneTimePassword: password.value
        }
      })
      .then((res) => {
        console.log("success", res);
        console.log(res.body.email);
        sessionStorage.setItem("email", res.body.email as string);
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
