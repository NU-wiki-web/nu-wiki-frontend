import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods_163xhtc } from "./auth";
import type { Methods as Methods_1paaqvt } from "./mail";
import type { Methods as Methods_1pbnd9f } from "./register";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? "http://localhost:8080" : baseURL
  ).replace(/\/$/, "");
  const PATH0 = "/signup/auth";
  const PATH1 = "/signup/mail";
  const PATH2 = "/signup/register";
  const POST = "POST";

  return {
    auth: {
      /**
       * @param option.body - ワンタイムパスワードを含めたjson
       */
      post: (option: {
        body: Methods_163xhtc["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<void, BasicHeaders, Methods_163xhtc["post"]["status"]>(
          prefix,
          PATH0,
          POST,
          option
        ).send(),
      /**
       * @param option.body - ワンタイムパスワードを含めたjson
       */
      $post: (option: {
        body: Methods_163xhtc["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<void, BasicHeaders, Methods_163xhtc["post"]["status"]>(
          prefix,
          PATH0,
          POST,
          option
        )
          .send()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    mail: {
      /**
       * @param option.body - メールアドレスを含めたjson
       */
      post: (option: {
        body: Methods_1paaqvt["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<
          void,
          Methods_1paaqvt["post"]["resHeaders"],
          Methods_1paaqvt["post"]["status"]
        >(prefix, PATH1, POST, option).send(),
      /**
       * @param option.body - メールアドレスを含めたjson
       */
      $post: (option: {
        body: Methods_1paaqvt["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<
          void,
          Methods_1paaqvt["post"]["resHeaders"],
          Methods_1paaqvt["post"]["status"]
        >(prefix, PATH1, POST, option)
          .send()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    register: {
      /**
       * @param option.body - 名前、パスワードを含めたjson
       */
      post: (option: {
        body: Methods_1pbnd9f["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<
          void,
          Methods_1pbnd9f["post"]["resHeaders"],
          Methods_1pbnd9f["post"]["status"]
        >(prefix, PATH2, POST, option).send(),
      /**
       * @param option.body - 名前、パスワードを含めたjson
       */
      $post: (option: {
        body: Methods_1pbnd9f["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<
          void,
          Methods_1pbnd9f["post"]["resHeaders"],
          Methods_1pbnd9f["post"]["status"]
        >(prefix, PATH2, POST, option)
          .send()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH2}`
    }
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
