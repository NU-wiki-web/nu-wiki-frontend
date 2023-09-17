<template>
  <UiHeader />
  <div class="w-full bg-[#4a8a8a] pb-[calc(5vh+60px)] pt-[5vh]" />

  <v-card
    class="mx-auto -mt-[60px] mb-12 min-w-[90vw] max-w-[90vw] md:min-w-[450px] md:max-w-[450px]"
  >
    <div
      class="pa-0 flex h-[60px] max-h-[70px] items-end justify-center text-2xl text-[#006E4F]"
    >
      NU-wikiにようこそ！
    </div>
    <div class="mx-auto my-4 w-[85%]">
      <v-form ref="form" v-model="valid">
        <div>
          <div class="mb-2">メールアドレス（@より前を入力）</div>
          <div class="flex">
            <v-responsive class="ma-0 pa-0">
              <v-text-field v-model="mail" :rules="mailRules"> </v-text-field>
            </v-responsive>
            <div class="ml-2 mt-2">
              <b>@s.mail.nagoya-u.ac.jp</b>
            </div>
          </div>
        </div>
        <div>
          <div class="mb-2">パスワード（半角英数字記号で8~40文字）</div>
          <div>
            <v-text-field
              v-model="password"
              :rules="pwRules"
              :append-icon="toggle().icon"
              :type="toggle().type"
              autocomplete="on"
              @click:append="showPassword = !showPassword"
            >
            </v-text-field>
          </div>
        </div>
      </v-form>
    </div>

    <div class="mb-6 text-center">
      <UiIconButton
        :buttonTitle="'ログイン'"
        :buttonIcon="'mdi-login'"
        :disabled="!valid"
        v-on:click="postLoginRequest"
      />
    </div>
    <div class="mx-auto w-4/5">
      <v-divider></v-divider>
    </div>

    <div class="mx-auto w-4/5">
      <div class="mb-8 mt-6 text-center">
        <a href="/signup"><u>アカウントを作成する</u></a>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
  import { useClient } from "~/util/api/useApi";

  const client = useClient();
  const mail = ref<string>("");
  const password = ref<string>("");

  // バリデーション
  const valid = ref<boolean>(false);

  const showPassword = ref<boolean>(false);
  const toggle = () => {
    const icon = showPassword.value ? "mdi-eye" : "mdi-eye-off";
    const type = showPassword.value ? "text" : "password";
    return { icon, type };
  };
  const mailRules = [(v: string) => !!v || "メールアドレスが未入力です"];
  const pwRules = [
    (v: string) => !!v || "パスワードが未入力です",
    (v: string) =>
      /^([a-zA-Z0-9!-/:-@¥[-`{-~]{8,41})$/.test(v) ||
      "正しい形式で入力してください"
  ];

  // ログイン
  const postLoginRequest = async function () {
    if (!valid.value) return;
    console.log(mail.value);
    console.log(password.value);
    client.login
      .post({
        body: {
          email: mail.value + "@s.mail.nagoya-u.ac.jp",
          password: password.value
        }
      })
      .then((res) => {
        console.log("success", res);
        window.alert("ログイン成功!");
      })
      .catch((err) => {
        console.error(err);
        window.alert("ログイン失敗...");
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
