import type { AspidaClient } from "aspida";
import type { Methods as Methods_by08hd } from ".";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? "http://localhost:8080" : baseURL
  ).replace(/\/$/, "");
  const PATH0 = "/signup/register";
  const POST = "POST";

  return {
    /**
     * @param option.body - メールアドレス、名前、パスワードを含めたjson
     */
    post: (option: {
      body: Methods_by08hd["post"]["reqBody"];
      config?: T | undefined;
    }) =>
      fetch<
        void,
        Methods_by08hd["post"]["resHeaders"],
        Methods_by08hd["post"]["status"]
      >(prefix, PATH0, POST, option).send(),
    /**
     * @param option.body - メールアドレス、名前、パスワードを含めたjson
     */
    $post: (option: {
      body: Methods_by08hd["post"]["reqBody"];
      config?: T | undefined;
    }) =>
      fetch<
        void,
        Methods_by08hd["post"]["resHeaders"],
        Methods_by08hd["post"]["status"]
      >(prefix, PATH0, POST, option)
        .send()
        .then((r) => r.body),
    $path: () => `${prefix}${PATH0}`
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
