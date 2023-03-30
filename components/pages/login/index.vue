<template>
  <UiHeader />
  <div class="h-[30vh] w-full bg-[#4a8a8a] text-center"></div>

  <v-card class="mx-auto w-1/2 min-w-[400px] max-w-[500px] -translate-y-32">
    <div class="d-flex pa-0 mt-16 mb-6 justify-center text-3xl text-[#006E4F]">
      NU-wikiにようこそ！
    </div>
    <div class="mx-auto w-4/5">
      <div>
        <div class="my-2">メールアドレス</div>
        <div>
          <v-form ref="form" v-model="valid">
            <v-text-field
              placeholder="@s.mail.nagoya-u.ac.jp"
              :rules="mailRules"
            >
            </v-text-field>
          </v-form>
        </div>
      </div>
      <div>
        <div class="my-2">パスワード</div>
        <div>
          <v-form ref="form" v-model="valid">
            <v-text-field
              placeholder="半角英数字記号で8文字以上"
              :rules="pwRules"
            >
            </v-text-field>
          </v-form>
        </div>
      </div>
    </div>

    <div class="mt-4 mb-10 text-center">
      <UiIconButton :buttonTitle="'ログイン'" :buttonIcon="'mdi-login'" />
    </div>
    <div class="mx-auto w-4/5">
      <v-divider></v-divider>
    </div>

    <div class="mx-auto w-4/5">
      <div class="my-8 text-center">
        <a href="?"><u>アカウントを作成する</u></a>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
const valid = false;
const mailRules = [
  (v: string) => !!v || "メールアドレスが未入力です",
  (v: string) =>
    /.+@s\.mail\.nagoya-u\.ac\.jp/.test(v) || "正しい形式で入力してください",
];
const pwRules = [
  (v: string) => !!v || "パスワードが未入力です",
  (v: string) =>
    /^([a-zA-Z0-9!-/:-@¥[-`{-~]{8,})$/.test(v) ||
    "正しい形式で入力してください",
];
</script>
