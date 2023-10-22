import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods0 } from ".";
import type { Methods as Methods1 } from "./_lecture_id/exams";
import type { Methods as Methods2 } from "./search";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? "http://localhost:8080" : baseURL
  ).replace(/\/$/, "");
  const PATH0 = "/lectures";
  const PATH1 = "/exams";
  const PATH2 = "/lectures/search";
  const GET = "GET";
  const POST = "POST";

  return {
    _lecture_id: (val0: number | string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        exams: {
          /**
           * @returns ok
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods1["get"]["resBody"],
              BasicHeaders,
              Methods1["get"]["status"]
            >(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * @returns ok
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods1["get"]["resBody"],
              BasicHeaders,
              Methods1["get"]["status"]
            >(prefix, `${prefix0}${PATH1}`, GET, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`
        }
      };
    },
    search: {
      /**
       * @param option.body - 絞り込み
       * @returns ok
       */
      post: (option: {
        body: Methods2["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<
          Methods2["post"]["resBody"],
          BasicHeaders,
          Methods2["post"]["status"]
        >(prefix, PATH2, POST, option).json(),
      /**
       * @param option.body - 絞り込み
       * @returns ok
       */
      $post: (option: {
        body: Methods2["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<
          Methods2["post"]["resBody"],
          BasicHeaders,
          Methods2["post"]["status"]
        >(prefix, PATH2, POST, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    /**
     * @returns ok
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<
        Methods0["get"]["resBody"],
        BasicHeaders,
        Methods0["get"]["status"]
      >(prefix, PATH0, GET, option).json(),
    /**
     * @returns ok
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<
        Methods0["get"]["resBody"],
        BasicHeaders,
        Methods0["get"]["status"]
      >(prefix, PATH0, GET, option)
        .json()
        .then((r) => r.body),
    /**
     * @param option.body - 講義の名前
     */
    post: (option: {
      body: Methods0["post"]["reqBody"];
      config?: T | undefined;
    }) =>
      fetch<void, BasicHeaders, Methods0["post"]["status"]>(
        prefix,
        PATH0,
        POST,
        option
      ).send(),
    /**
     * @param option.body - 講義の名前
     */
    $post: (option: {
      body: Methods0["post"]["reqBody"];
      config?: T | undefined;
    }) =>
      fetch<void, BasicHeaders, Methods0["post"]["status"]>(
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
