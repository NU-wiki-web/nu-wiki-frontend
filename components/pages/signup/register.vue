<template>
  <UiHeader />
  <div class="w-full bg-[#4a8a8a] pb-[calc(5vh+60px)] pt-[5vh]">
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
        <div>
          <v-form ref="form" v-model="valid">
            <div class="mt-2">お名前</div>
            <v-text-field v-model="name" :rules="nameRules" />

            <div>パスワード（半角英数字記号で8~40文字）</div>
            <v-text-field
              v-model="password"
              :rules="pwRules"
              :append-icon="toggle().icon"
              :type="toggle().type"
              autocomplete="on"
              @click:append="showPassword = !showPassword"
            />
          </v-form>
        </div>
      </div>
    </div>

    <div class="mb-8 mt-2 text-center">
      <UiIconButton
        :buttonTitle="'本登録'"
        :buttonIcon="'mdi-account-plus'"
        :disabled="!valid"
        :onClick="sendUserInfo"
      />
    </div>
  </v-card>
</template>

<script setup lang="ts">
  import { useClient } from "~~/util/api/useApi";

  const client = useClient();
  const name = ref<string>("");
  const password = ref<string>("");
  const showPassword = ref<boolean>(false);
  const valid = ref<boolean>(false);

  const toggle = () => {
    const icon = showPassword.value ? "mdi-eye" : "mdi-eye-off";
    const type = showPassword.value ? "text" : "password";
    return { icon, type };
  };

  const nameRules = [(v: string) => !!v || "名前が未入力です"];
  const pwRules = [
    (v: string) => !!v || "パスワードが未入力です",
    (v: string) =>
      /^([a-zA-Z0-9!-/:-@¥[-`{-~]{8,})$/.test(v) ||
      "正しい形式で入力してください"
  ];

  const sendUserInfo = function () {
    client.signup.register
      .post({
        body: {
          email: sessionStorage.getItem("email") as string,
          name: name.value,
          password: password.value
        }
      })
      .then((res) => {
        console.log("success", res);
        const router = useRouter();
        router.push("/");
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
