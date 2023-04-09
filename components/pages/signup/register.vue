<template>
  <UiHeader />
  <div class="w-full bg-[#4a8a8a] pt-[5vh] pb-[calc(5vh+60px)]">
    <UiSignupStepBar :stepNumber="3" />
  </div>

  <v-card
    class="mx-auto -mt-[60px] mb-12 min-w-[90vw] max-w-[90vw] md:min-w-[370px] md:max-w-[370px] 2xl:min-w-[460px] 2xl:max-w-[460px]"
  >
    <div
      class="pa-0 flex h-[60px] max-h-[70px] items-end justify-center text-xl text-[#006E4F]"
    >
      <span>ユーザー情報の入力</span>
    </div>
    <div class="mx-auto my-4 w-[85%]">
      <span class="my-2 text-base">
        メール認証が完了しました。<br />
        本登録のための情報を入力してください。
      </span>
    </div>
    <div class="mx-auto mb-4 w-[85%]">
      <div>
        <div class="mt-2">お名前</div>
        <div>
          <v-form ref="form" v-model="valid">
            <v-text-field />
          </v-form>
        </div>
        <div>
          <div>パスワード</div>
          <div>
            <v-form ref="form" v-model="valid">
              <v-text-field placeholder="半角英数字で8~40文字" :rules="pwRules">
              </v-text-field>
            </v-form>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-2 mb-8 text-center">
      <UiIconButton :buttonTitle="'本登録'" :buttonIcon="'mdi-account-plus'" />
    </div>
  </v-card>
</template>

<script setup lang="ts">
const valid = false;
const pwRules = [
  (v: string) => !!v || "パスワードが未入力です",
  (v: string) =>
    /^([a-zA-Z0-9!-/:-@¥[-`{-~]{8,})$/.test(v) ||
    "正しい形式で入力してください",
];

let checkbox = false;
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
