import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods0 } from ".";
import type { Methods as Methods1 } from "./auth";
import type { Methods as Methods2 } from "./register";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? "http://127.0.0.1:8080" : baseURL
  ).replace(/\/$/, "");
  const PATH0 = "/signup";
  const PATH1 = "/signup/auth";
  const PATH2 = "/signup/register";
  const POST = "POST";

  return {
    auth: {
      /**
       * @param option.body - ワンタイムパスワードを含めたjson
       * @returns 認証に成功したら、再びメールアドレスを返す
       */
      post: (option: {
        body: Methods1["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<
          Methods1["post"]["resBody"],
          BasicHeaders,
          Methods1["post"]["status"]
        >(prefix, PATH1, POST, option).json(),
      /**
       * @param option.body - ワンタイムパスワードを含めたjson
       * @returns 認証に成功したら、再びメールアドレスを返す
       */
      $post: (option: {
        body: Methods1["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<
          Methods1["post"]["resBody"],
          BasicHeaders,
          Methods1["post"]["status"]
        >(prefix, PATH1, POST, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    register: {
      /**
       * @param option.body - メールアドレス、名前、パスワードを含めたjson
       */
      post: (option: {
        body: Methods2["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<void, Methods2["post"]["resHeaders"], Methods2["post"]["status"]>(
          prefix,
          PATH2,
          POST,
          option
        ).send(),
      /**
       * @param option.body - メールアドレス、名前、パスワードを含めたjson
       */
      $post: (option: {
        body: Methods2["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<void, Methods2["post"]["resHeaders"], Methods2["post"]["status"]>(
          prefix,
          PATH2,
          POST,
          option
        )
          .send()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    /**
     * @param option.body - メールアドレスを含めたjson
     */
    post: (option: {
      body: Methods0["post"]["reqBody"];
      config?: T | undefined;
    }) =>
      fetch<void, Methods0["post"]["resHeaders"], Methods0["post"]["status"]>(
        prefix,
        PATH0,
        POST,
        option
      ).send(),
    /**
     * @param option.body - メールアドレスを含めたjson
     */
    $post: (option: {
      body: Methods0["post"]["reqBody"];
      config?: T | undefined;
    }) =>
      fetch<void, Methods0["post"]["resHeaders"], Methods0["post"]["status"]>(
        prefix,
        PATH0,
        POST,
        option
      )
        .send()
        .then((r) => r.body),
    $path: () => `${prefix}${PATH0}`
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
