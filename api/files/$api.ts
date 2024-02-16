import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods_by08hd } from ".";
import type { Methods as Methods_1lyjmi5 } from "./_fileid@string";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? "http://localhost:8080" : baseURL
  ).replace(/\/$/, "");
  const PATH0 = "/files";
  const GET = "GET";
  const POST = "POST";
  const PUT = "PUT";
  const DELETE = "DELETE";

  return {
    _fileid: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<
            Methods_1lyjmi5["get"]["resBody"],
            BasicHeaders,
            Methods_1lyjmi5["get"]["status"]
          >(prefix, prefix0, GET, option).blob(),
        /**
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<
            Methods_1lyjmi5["get"]["resBody"],
            BasicHeaders,
            Methods_1lyjmi5["get"]["status"]
          >(prefix, prefix0, GET, option)
            .blob()
            .then((r) => r.body),
        /**
         * @param option.body - pdfファイル
         */
        put: (option: {
          body: Methods_1lyjmi5["put"]["reqBody"];
          config?: T | undefined;
        }) =>
          fetch<void, BasicHeaders, Methods_1lyjmi5["put"]["status"]>(
            prefix,
            prefix0,
            PUT,
            option
          ).send(),
        /**
         * @param option.body - pdfファイル
         */
        $put: (option: {
          body: Methods_1lyjmi5["put"]["reqBody"];
          config?: T | undefined;
        }) =>
          fetch<void, BasicHeaders, Methods_1lyjmi5["put"]["status"]>(
            prefix,
            prefix0,
            PUT,
            option
          )
            .send()
            .then((r) => r.body),
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_1lyjmi5["delete"]["status"]>(
            prefix,
            prefix0,
            DELETE,
            option
          ).send(),
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods_1lyjmi5["delete"]["status"]>(
            prefix,
            prefix0,
            DELETE,
            option
          )
            .send()
            .then((r) => r.body),
        $path: () => `${prefix}${prefix0}`
      };
    },
    /**
     * @returns OK
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<
        Methods_by08hd["get"]["resBody"],
        BasicHeaders,
        Methods_by08hd["get"]["status"]
      >(prefix, PATH0, GET, option).json(),
    /**
     * @returns OK
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<
        Methods_by08hd["get"]["resBody"],
        BasicHeaders,
        Methods_by08hd["get"]["status"]
      >(prefix, PATH0, GET, option)
        .json()
        .then((r) => r.body),
    /**
     * @param option.body - 講義と講義のテストを指定して講義資料をアップロードする
     * @returns OK
     */
    post: (option: {
      body: Methods_by08hd["post"]["reqBody"];
      config?: T | undefined;
    }) =>
      fetch<
        Methods_by08hd["post"]["resBody"],
        BasicHeaders,
        Methods_by08hd["post"]["status"]
      >(prefix, PATH0, POST, option, "FormData").json(),
    /**
     * @param option.body - 講義と講義のテストを指定して講義資料をアップロードする
     * @returns OK
     */
    $post: (option: {
      body: Methods_by08hd["post"]["reqBody"];
      config?: T | undefined;
    }) =>
      fetch<
        Methods_by08hd["post"]["resBody"],
        BasicHeaders,
        Methods_by08hd["post"]["status"]
      >(prefix, PATH0, POST, option, "FormData")
        .json()
        .then((r) => r.body),
    $path: () => `${prefix}${PATH0}`
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
