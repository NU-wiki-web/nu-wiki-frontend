import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods_by08hd } from ".";
import type { Methods as Methods_2aebqs } from "./_exam_id/files";

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
              Methods_2aebqs["get"]["resBody"],
              BasicHeaders,
              Methods_2aebqs["get"]["status"]
            >(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * @returns ok
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods_2aebqs["get"]["resBody"],
              BasicHeaders,
              Methods_2aebqs["get"]["status"]
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
      body: Methods_by08hd["post"]["reqBody"];
      config?: T | undefined;
    }) =>
      fetch<
        Methods_by08hd["post"]["resBody"],
        BasicHeaders,
        Methods_by08hd["post"]["status"]
      >(prefix, PATH0, POST, option).json(),
    /**
     * @param option.body - テストの名前
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
      >(prefix, PATH0, POST, option)
        .json()
        .then((r) => r.body),
    $path: () => `${prefix}${PATH0}`
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
