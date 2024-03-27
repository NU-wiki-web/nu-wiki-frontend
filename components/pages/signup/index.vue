<template>
  <UiHeader />
  <div class="w-full bg-nu-teritary pb-[calc(5vh+60px)] pt-12">
    <UiSignupStepBar :stepNumber="1" />
  </div>

  <v-card class="mx-auto -mt-16 mb-12 w-11/12 md:w-96">
    <div class="flex h-16 items-end justify-center text-2xl text-primary">
      <span>新規登録</span>
    </div>
    <div class="mx-auto my-4 w-5/6">
      <div>
        <div class="mb-2">メールアドレス（@より前を入力）</div>
        <div class="flex">
          <v-responsive>
            <v-text-field v-model="mail"> </v-text-field>
          </v-responsive>
          <div class="ml-2 mt-2">
            <b>@s.mail.nagoya-u.ac.jp</b>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto w-5/6">
      <v-checkbox v-model="checkbox">
        <template v-slot:label>
          <div class="text-black">
            <u>
              <a target="_blank" href="https://vuetifyjs.com" @click.stop>
                利用規約
              </a>
            </u>
            に同意する
          </div>
        </template>
      </v-checkbox>
    </div>

    <div class="mb-4 text-center text-error">
      {{ errorMessage }}
    </div>

    <div class="mb-6 text-center">
      <UiIconButton
        :buttonTitle="'メール認証'"
        :buttonIcon="'mdi-email-outline'"
        :disabled="!checkbox"
        :onClick="requestMailForSignUp"
      />
    </div>
  </v-card>
</template>

<script setup lang="ts">
  const client = useClient();

  const mail = ref<string>("");
  const checkbox = ref<boolean>(false);

  // フォームのエラーメッセージ
  const errorMessage = ref<string>("");

  const requestMailForSignUp = function () {
    client.signup.mail
      .post({
        body: {
          email: mail.value
        }
      })
      .then(async (res) => {
        const router = useRouter();
        router.push("/signup/auth");
      })
      .catch((err) => {
        console.error(err);
        errorMessage.value = err.response.data.detail;
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
