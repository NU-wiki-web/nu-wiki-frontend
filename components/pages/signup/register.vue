<template>
  <UiHeader />
  <div class="w-full bg-nu-teritary pt-12 pb-[calc(5vh+60px)]">
    <UiSignupStepBar :stepNumber="3" />
  </div>

  <v-card
    class="mx-auto -mt-16 mb-12 w-11/12 md:w-96"
  >
    <div
      class="flex h-16 items-end justify-center text-2xl text-primary"
    >
      <span>ユーザー情報の入力</span>
    </div>
    <div class="mx-auto my-4 w-5/6">
      <span class="my-2 text-base">
        メール認証が完了しました。<br />
        本登録のための情報を入力してください。
      </span>
    </div>
    <div class="mx-auto mb-4 w-5/6">
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

    <div class="mt-2 mb-8 text-center">
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
  //console.log(sessionStorage.getItem("email") as string);
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
        window.alert("登録完了!");
        router.push("/");
      })
      .catch((err) => {
        window.alert("登録失敗...");
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
