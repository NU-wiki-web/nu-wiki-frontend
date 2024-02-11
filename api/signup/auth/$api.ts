import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods0 } from ".";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? "https://nu-wiki-api.onrender.com" : baseURL
  ).replace(/\/$/, "");
  const PATH0 = "/signup/auth";
  const POST = "POST";

  return {
    /**
     * @param option.body - ワンタイムパスワードを含めたjson
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
     * @param option.body - ワンタイムパスワードを含めたjson
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
