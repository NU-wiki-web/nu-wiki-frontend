import type { AspidaClient, BasicHeaders } from "aspida";
import { dataToURLString } from "aspida";
import type { Methods as Methods0 } from ".";
import type { Methods as Methods1 } from "./exams";
import type { Methods as Methods2 } from "./exams/_exam_id/files";
import type { Methods as Methods3 } from "./files";
import type { Methods as Methods4 } from "./files/_fileid@string";
import type { Methods as Methods5 } from "./lectures";
import type { Methods as Methods6 } from "./lectures/_lecture_id/exams";
import type { Methods as Methods7 } from "./lectures/search";
import type { Methods as Methods8 } from "./login";
import type { Methods as Methods9 } from "./signup/auth";
import type { Methods as Methods10 } from "./signup/mail";
import type { Methods as Methods11 } from "./signup/register";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? "http://localhost:8080" : baseURL
  ).replace(/\/$/, "");
  const PATH0 = "/exams";
  const PATH1 = "/files";
  const PATH2 = "/lectures";
  const PATH3 = "/lectures/search";
  const PATH4 = "/login";
  const PATH5 = "/signup/auth";
  const PATH6 = "/signup/mail";
  const PATH7 = "/signup/register";
  const GET = "GET";
  const POST = "POST";
  const PUT = "PUT";
  const DELETE = "DELETE";

  return {
    exams: {
      _exam_id: (val1: number | string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          files: {
            /**
             * @returns ok
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<
                Methods2["get"]["resBody"],
                BasicHeaders,
                Methods2["get"]["status"]
              >(prefix, `${prefix1}${PATH1}`, GET, option).json(),
            /**
             * @returns ok
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<
                Methods2["get"]["resBody"],
                BasicHeaders,
                Methods2["get"]["status"]
              >(prefix, `${prefix1}${PATH1}`, GET, option)
                .json()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix1}${PATH1}`
          }
        };
      },
      /**
       * @param option.body - テストの名前
       */
      post: (option: {
        body: Methods1["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<void, BasicHeaders, Methods1["post"]["status"]>(
          prefix,
          PATH0,
          POST,
          option
        ).send(),
      /**
       * @param option.body - テストの名前
       */
      $post: (option: {
        body: Methods1["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<void, BasicHeaders, Methods1["post"]["status"]>(
          prefix,
          PATH0,
          POST,
          option
        )
          .send()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    files: {
      _fileid: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods4["get"]["resBody"],
              BasicHeaders,
              Methods4["get"]["status"]
            >(prefix, prefix1, GET, option).blob(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods4["get"]["resBody"],
              BasicHeaders,
              Methods4["get"]["status"]
            >(prefix, prefix1, GET, option)
              .blob()
              .then((r) => r.body),
          /**
           * @param option.body - pdfファイル
           */
          put: (option: {
            body: Methods4["put"]["reqBody"];
            config?: T | undefined;
          }) =>
            fetch<void, BasicHeaders, Methods4["put"]["status"]>(
              prefix,
              prefix1,
              PUT,
              option
            ).send(),
          /**
           * @param option.body - pdfファイル
           */
          $put: (option: {
            body: Methods4["put"]["reqBody"];
            config?: T | undefined;
          }) =>
            fetch<void, BasicHeaders, Methods4["put"]["status"]>(
              prefix,
              prefix1,
              PUT,
              option
            )
              .send()
              .then((r) => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods4["delete"]["status"]>(
              prefix,
              prefix1,
              DELETE,
              option
            ).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods4["delete"]["status"]>(
              prefix,
              prefix1,
              DELETE,
              option
            )
              .send()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`
        };
      },
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods3["get"]["resBody"],
          BasicHeaders,
          Methods3["get"]["status"]
        >(prefix, PATH1, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods3["get"]["resBody"],
          BasicHeaders,
          Methods3["get"]["status"]
        >(prefix, PATH1, GET, option)
          .json()
          .then((r) => r.body),
      /**
       * @param option.body - 講義と講義のテストを指定して講義資料をアップロードする
       * @returns OK
       */
      post: (option: {
        body: Methods3["post"]["reqBody"];
        query: Methods3["post"]["query"];
        config?: T | undefined;
      }) =>
        fetch<
          Methods3["post"]["resBody"],
          BasicHeaders,
          Methods3["post"]["status"]
        >(prefix, PATH1, POST, option).json(),
      /**
       * @param option.body - 講義と講義のテストを指定して講義資料をアップロードする
       * @returns OK
       */
      $post: (option: {
        body: Methods3["post"]["reqBody"];
        query: Methods3["post"]["query"];
        config?: T | undefined;
      }) =>
        fetch<
          Methods3["post"]["resBody"],
          BasicHeaders,
          Methods3["post"]["status"]
        >(prefix, PATH1, POST, option)
          .json()
          .then((r) => r.body),
      $path: (
        option?:
          | { method: "post"; query: Methods3["post"]["query"] }
          | undefined
      ) =>
        `${prefix}${PATH1}${
          option && option.query ? `?${dataToURLString(option.query)}` : ""
        }`
    },
    lectures: {
      _lecture_id: (val1: number | string) => {
        const prefix1 = `${PATH2}/${val1}`;

        return {
          exams: {
            /**
             * @returns ok
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<
                Methods6["get"]["resBody"],
                BasicHeaders,
                Methods6["get"]["status"]
              >(prefix, `${prefix1}${PATH0}`, GET, option).json(),
            /**
             * @returns ok
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<
                Methods6["get"]["resBody"],
                BasicHeaders,
                Methods6["get"]["status"]
              >(prefix, `${prefix1}${PATH0}`, GET, option)
                .json()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix1}${PATH0}`
          }
        };
      },
      search: {
        /**
         * @param option.body - 絞り込み
         * @returns ok
         */
        post: (option: {
          body: Methods7["post"]["reqBody"];
          config?: T | undefined;
        }) =>
          fetch<
            Methods7["post"]["resBody"],
            BasicHeaders,
            Methods7["post"]["status"]
          >(prefix, PATH3, POST, option).json(),
        /**
         * @param option.body - 絞り込み
         * @returns ok
         */
        $post: (option: {
          body: Methods7["post"]["reqBody"];
          config?: T | undefined;
        }) =>
          fetch<
            Methods7["post"]["resBody"],
            BasicHeaders,
            Methods7["post"]["status"]
          >(prefix, PATH3, POST, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH3}`
      },
      /**
       * @returns ok
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods5["get"]["resBody"],
          BasicHeaders,
          Methods5["get"]["status"]
        >(prefix, PATH2, GET, option).json(),
      /**
       * @returns ok
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods5["get"]["resBody"],
          BasicHeaders,
          Methods5["get"]["status"]
        >(prefix, PATH2, GET, option)
          .json()
          .then((r) => r.body),
      /**
       * @param option.body - 講義の名前
       */
      post: (option: {
        body: Methods5["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<void, BasicHeaders, Methods5["post"]["status"]>(
          prefix,
          PATH2,
          POST,
          option
        ).send(),
      /**
       * @param option.body - 講義の名前
       */
      $post: (option: {
        body: Methods5["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<void, BasicHeaders, Methods5["post"]["status"]>(
          prefix,
          PATH2,
          POST,
          option
        )
          .send()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    login: {
      /**
       * @param option.body - メールアドレスとパスワードを含めたjson
       */
      post: (option: {
        body: Methods8["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<void, Methods8["post"]["resHeaders"], Methods8["post"]["status"]>(
          prefix,
          PATH4,
          POST,
          option
        ).send(),
      /**
       * @param option.body - メールアドレスとパスワードを含めたjson
       */
      $post: (option: {
        body: Methods8["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<void, Methods8["post"]["resHeaders"], Methods8["post"]["status"]>(
          prefix,
          PATH4,
          POST,
          option
        )
          .send()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH4}`
    },
    signup: {
      auth: {
        /**
         * @param option.body - ワンタイムパスワードを含めたjson
         * @returns 認証に成功したら、再びメールアドレスを返す
         */
        post: (option: {
          body: Methods9["post"]["reqBody"];
          config?: T | undefined;
        }) =>
          fetch<
            Methods9["post"]["resBody"],
            BasicHeaders,
            Methods9["post"]["status"]
          >(prefix, PATH5, POST, option).json(),
        /**
         * @param option.body - ワンタイムパスワードを含めたjson
         * @returns 認証に成功したら、再びメールアドレスを返す
         */
        $post: (option: {
          body: Methods9["post"]["reqBody"];
          config?: T | undefined;
        }) =>
          fetch<
            Methods9["post"]["resBody"],
            BasicHeaders,
            Methods9["post"]["status"]
          >(prefix, PATH5, POST, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH5}`
      },
      mail: {
        /**
         * @param option.body - メールアドレスを含めたjson
         */
        post: (option: {
          body: Methods10["post"]["reqBody"];
          config?: T | undefined;
        }) =>
          fetch<
            void,
            Methods10["post"]["resHeaders"],
            Methods10["post"]["status"]
          >(prefix, PATH6, POST, option).send(),
        /**
         * @param option.body - メールアドレスを含めたjson
         */
        $post: (option: {
          body: Methods10["post"]["reqBody"];
          config?: T | undefined;
        }) =>
          fetch<
            void,
            Methods10["post"]["resHeaders"],
            Methods10["post"]["status"]
          >(prefix, PATH6, POST, option)
            .send()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH6}`
      },
      register: {
        /**
         * @param option.body - メールアドレス、名前、パスワードを含めたjson
         */
        post: (option: {
          body: Methods11["post"]["reqBody"];
          config?: T | undefined;
        }) =>
          fetch<
            void,
            Methods11["post"]["resHeaders"],
            Methods11["post"]["status"]
          >(prefix, PATH7, POST, option).send(),
        /**
         * @param option.body - メールアドレス、名前、パスワードを含めたjson
         */
        $post: (option: {
          body: Methods11["post"]["reqBody"];
          config?: T | undefined;
        }) =>
          fetch<
            void,
            Methods11["post"]["resHeaders"],
            Methods11["post"]["status"]
          >(prefix, PATH7, POST, option)
            .send()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH7}`
      }
    },
    /**
     * @returns OK
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<
        Methods0["get"]["resBody"],
        BasicHeaders,
        Methods0["get"]["status"]
      >(prefix, "", GET, option).json(),
    /**
     * @returns OK
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<
        Methods0["get"]["resBody"],
        BasicHeaders,
        Methods0["get"]["status"]
      >(prefix, "", GET, option)
        .json()
        .then((r) => r.body),
    $path: () => `${prefix}`
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
