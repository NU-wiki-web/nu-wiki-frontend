<template>
  <UiHeader />
  <div class="h-[30vh] w-full bg-[#4a8a8a] pt-[5vh]">
    <UiSignupStepBar :stepNumber="1" />
  </div>

  <v-card
    class="mx-auto -mt-[calc(20vh-90px)] mb-12 min-w-[90vw] max-w-[90vw] md:min-w-[370px] md:max-w-[370px] 2xl:min-w-[460px] 2xl:max-w-[460px]"
  >
    <div class="d-flex pa-0 mt-10 mb-8 justify-center text-3xl text-[#006E4F]">
      新規登録
    </div>
    <div class="mx-auto w-4/5">
      <div>
        <div class="my-2">メールアドレス</div>
        <div>
          <v-form ref="form" v-model="valid">
            <v-text-field
              placeholder="*@s.mail.nagoya-u.ac.jp"
              :rules="mailRules"
            >
            </v-text-field>
          </v-form>
        </div>
      </div>
      <div>
        <v-checkbox>
          <template v-slot:label>
            <div class="text-black">
              <u>
                <a
                  target="_blank"
                  href="https://vuetifyjs.com"
                  v-bind="props"
                  @click.stop
                >
                  利用規約
                </a>
              </u>
              に同意する
            </div>
          </template>
        </v-checkbox>
      </div>
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
const valid = false;
const mailRules = [
  (v: string) => !!v || "メールアドレスが未入力です",
  (v: string) =>
    /.+@s\.mail\.nagoya-u\.ac\.jp/.test(v) || "正しい形式で入力してください",
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
