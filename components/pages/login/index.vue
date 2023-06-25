<template>
  <UiHeader />
  <div class="w-full bg-[#4a8a8a] pt-[5vh] pb-[calc(5vh+60px)]" />

  <v-card
    class="mx-auto -mt-[60px] mb-12 min-w-[90vw] max-w-[90vw] md:min-w-[370px] md:max-w-[370px] 2xl:min-w-[460px] 2xl:max-w-[460px]"
  >
    <div
      class="pa-0 flex h-[60px] max-h-[70px] items-end justify-center text-xl text-[#006E4F]"
    >
      NU-wikiにようこそ！
    </div>
    <div class="mx-auto my-4 w-[85%]">
      <div>
        <div class="mb-2">メールアドレス</div>
        <div>
          <v-form ref="form" v-model="valid">
            <v-responsive class="ma-0 pa-0">
              <v-text-field
                placeholder="*@s.mail.nagoya-u.ac.jp"
                :rules="mailRules"
              >
              </v-text-field
            ></v-responsive>
          </v-form>
        </div>
      </div>
      <div>
        <div class="mb-2">パスワード</div>
        <div>
          <v-form ref="form" v-model="valid">
            <v-text-field placeholder="半角英数字で8~40文字" :rules="pwRules">
            </v-text-field>
          </v-form>
        </div>
      </div>
    </div>

    <div class="mb-6 text-center">
      <UiIconButton :buttonTitle="'ログイン'" :buttonIcon="'mdi-login'" />
    </div>
    <div class="mx-auto w-4/5">
      <v-divider></v-divider>
    </div>

    <div class="mx-auto w-4/5">
      <div class="mt-6 mb-8 text-center">
        <a href="/signup"><u>アカウントを作成する</u></a>
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
    /^([a-zA-Z0-9!-/:-@¥[-`{-~]{8,41})$/.test(v) ||
    "正しい形式で入力してください",
];
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
