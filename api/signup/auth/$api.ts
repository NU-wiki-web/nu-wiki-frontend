import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods0 } from ".";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? "http://127.0.0.1:8080" : baseURL
  ).replace(/\/$/, "");
  const PATH0 = "/signup/auth";
  const POST = "POST";

  return {
    /**
     * @param option.body - ワンタイムパスワードを含めたjson
     * @returns 認証に成功したら、再びメールアドレスを返す
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
     * @param option.body - ワンタイムパスワードを含めたjson
     * @returns 認証に成功したら、再びメールアドレスを返す
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
