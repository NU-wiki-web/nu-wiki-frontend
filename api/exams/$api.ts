import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods0 } from ".";
import type { Methods as Methods1 } from "./_exam_id/files";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? "http://localhost:8080" : baseURL
  ).replace(/\/$/, "");
  const PATH0 = "/exams";
  const PATH1 = "/files";
  const GET = "GET";
  const POST = "POST";

  return {
    _exam_id: (val0: number | string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        files: {
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
    /**
     * @param option.body - テストの名前
     * @returns OK
     */
    post: (option: {
      body: Methods0["post"]["reqBody"];
      config?: T | undefined;
    }) =>
      fetch<
        Methods0["post"]["resBody"],
        BasicHeaders,
        Methods0["post"]["status"]
      >(prefix, PATH0, POST, option).json(),
    /**
     * @param option.body - テストの名前
     * @returns OK
     */
    $post: (option: {
      body: Methods0["post"]["reqBody"];
      config?: T | undefined;
    }) =>
      fetch<
        Methods0["post"]["resBody"],
        BasicHeaders,
        Methods0["post"]["status"]
      >(prefix, PATH0, POST, option)
        .json()
        .then((r) => r.body),
    $path: () => `${prefix}${PATH0}`
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
