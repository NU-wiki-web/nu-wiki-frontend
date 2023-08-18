<template>
  <UiHeader />
  <div class="w-full bg-[#4a8a8a] pt-[5vh] pb-[calc(5vh+60px)]">
    <UiSignupStepBar :stepNumber="1" />
  </div>

  <v-card
    class="mx-auto -mt-[60px] mb-12 min-w-[90vw] max-w-[90vw] md:min-w-[370px] md:max-w-[370px] 2xl:min-w-[460px] 2xl:max-w-[460px]"
  >
    <div
      class="pa-0 flex h-[60px] max-h-[70px] items-end justify-center text-xl text-[#006E4F]"
    >
      <span>新規登録</span>
    </div>
    <div class="mx-auto my-4 w-[85%]">
      <div>
        <div class="mb-2">メールアドレス（@より前を入力）</div>
        <div class="flex">
          <v-responsive class="ma-0 pa-0">
            <v-text-field v-model="mail"> </v-text-field>
          </v-responsive>
          <div class="ml-2 mt-2">
            <b>@s.mail.nagoya-u.ac.jp</b>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto w-[90%]">
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
  import { useClient } from "~~/util/api/useApi";

  const client = useClient();

  const mail = ref<string>("");
  const checkbox = ref<boolean>(false);

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
      });
  };

  console.log(checkbox.value);
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
