import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1wezual } from './exams/_exam_id/files';
import type { Methods as Methods_19v0g2l } from './files';
import type { Methods as Methods_1eqyz61 } from './files/_fileid@string';
import type { Methods as Methods_iigf21 } from './lectures';
import type { Methods as Methods_1ci9g1q } from './lectures/_lecture_id/exams';
import type { Methods as Methods_1a3o5fu } from './lectures/search';
import type { Methods as Methods_idk8rz } from './login';
import type { Methods as Methods_1fdblld } from './signup/auth';
import type { Methods as Methods_jq4fuo } from './signup/mail';
import type { Methods as Methods_1izjkiy } from './signup/register';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://127.0.0.1:8080' : baseURL).replace(/\/$/, '');
  const PATH0 = '/exams';
  const PATH1 = '/files';
  const PATH2 = '/lectures';
  const PATH3 = '/lectures/search';
  const PATH4 = '/login';
  const PATH5 = '/signup/auth';
  const PATH6 = '/signup/mail';
  const PATH7 = '/signup/register';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

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
              fetch<Methods_1wezual['get']['resBody'], BasicHeaders, Methods_1wezual['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
            /**
             * @returns ok
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1wezual['get']['resBody'], BasicHeaders, Methods_1wezual['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH1}`,
          },
        };
      },
    },
    files: {
      _fileid: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          /**
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1eqyz61['get']['resBody'], BasicHeaders, Methods_1eqyz61['get']['status']>(prefix, prefix1, GET, option).blob(),
          /**
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1eqyz61['get']['resBody'], BasicHeaders, Methods_1eqyz61['get']['status']>(prefix, prefix1, GET, option).blob().then(r => r.body),
          /**
           * @param option.body - pdfファイル
           */
          put: (option: { body: Methods_1eqyz61['put']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1eqyz61['put']['status']>(prefix, prefix1, PUT, option).send(),
          /**
           * @param option.body - pdfファイル
           */
          $put: (option: { body: Methods_1eqyz61['put']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1eqyz61['put']['status']>(prefix, prefix1, PUT, option).send().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1eqyz61['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_1eqyz61['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_19v0g2l['get']['resBody'], BasicHeaders, Methods_19v0g2l['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_19v0g2l['get']['resBody'], BasicHeaders, Methods_19v0g2l['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * @param option.body - 講義と講義のテストを指定して講義資料をアップロードする
       * @returns OK
       */
      post: (option: { body: Methods_19v0g2l['post']['reqBody'], query: Methods_19v0g2l['post']['query'], config?: T | undefined }) =>
        fetch<Methods_19v0g2l['post']['resBody'], BasicHeaders, Methods_19v0g2l['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * @param option.body - 講義と講義のテストを指定して講義資料をアップロードする
       * @returns OK
       */
      $post: (option: { body: Methods_19v0g2l['post']['reqBody'], query: Methods_19v0g2l['post']['query'], config?: T | undefined }) =>
        fetch<Methods_19v0g2l['post']['resBody'], BasicHeaders, Methods_19v0g2l['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods_19v0g2l['post']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
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
              fetch<Methods_1ci9g1q['get']['resBody'], BasicHeaders, Methods_1ci9g1q['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json(),
            /**
             * @returns ok
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1ci9g1q['get']['resBody'], BasicHeaders, Methods_1ci9g1q['get']['status']>(prefix, `${prefix1}${PATH0}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH0}`,
          },
        };
      },
      search: {
        /**
         * @param option.body - 絞り込み
         * @returns ok
         */
        post: (option: { body: Methods_1a3o5fu['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1a3o5fu['post']['resBody'], BasicHeaders, Methods_1a3o5fu['post']['status']>(prefix, PATH3, POST, option).json(),
        /**
         * @param option.body - 絞り込み
         * @returns ok
         */
        $post: (option: { body: Methods_1a3o5fu['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1a3o5fu['post']['resBody'], BasicHeaders, Methods_1a3o5fu['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH3}`,
      },
      /**
       * @returns ok
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_iigf21['get']['resBody'], BasicHeaders, Methods_iigf21['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * @returns ok
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_iigf21['get']['resBody'], BasicHeaders, Methods_iigf21['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      /**
       * @param option.body - 講義の名前
       */
      post: (option: { body: Methods_iigf21['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_iigf21['post']['status']>(prefix, PATH2, POST, option).send(),
      /**
       * @param option.body - 講義の名前
       */
      $post: (option: { body: Methods_iigf21['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_iigf21['post']['status']>(prefix, PATH2, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    login: {
      /**
       * @param option.body - メールアドレスとパスワードを含めたjson
       */
      post: (option: { body: Methods_idk8rz['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, Methods_idk8rz['post']['resHeaders'], Methods_idk8rz['post']['status']>(prefix, PATH4, POST, option).send(),
      /**
       * @param option.body - メールアドレスとパスワードを含めたjson
       */
      $post: (option: { body: Methods_idk8rz['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, Methods_idk8rz['post']['resHeaders'], Methods_idk8rz['post']['status']>(prefix, PATH4, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH4}`,
    },
    signup: {
      auth: {
        /**
         * @param option.body - ワンタイムパスワードを含めたjson
         * @returns 認証に成功したら、再びメールアドレスを返す
         */
        post: (option: { body: Methods_1fdblld['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1fdblld['post']['resBody'], BasicHeaders, Methods_1fdblld['post']['status']>(prefix, PATH5, POST, option).json(),
        /**
         * @param option.body - ワンタイムパスワードを含めたjson
         * @returns 認証に成功したら、再びメールアドレスを返す
         */
        $post: (option: { body: Methods_1fdblld['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1fdblld['post']['resBody'], BasicHeaders, Methods_1fdblld['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH5}`,
      },
      mail: {
        /**
         * @param option.body - メールアドレスを含めたjson
         */
        post: (option: { body: Methods_jq4fuo['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, Methods_jq4fuo['post']['resHeaders'], Methods_jq4fuo['post']['status']>(prefix, PATH6, POST, option).send(),
        /**
         * @param option.body - メールアドレスを含めたjson
         */
        $post: (option: { body: Methods_jq4fuo['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, Methods_jq4fuo['post']['resHeaders'], Methods_jq4fuo['post']['status']>(prefix, PATH6, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH6}`,
      },
      register: {
        /**
         * @param option.body - メールアドレス、名前、パスワードを含めたjson
         */
        post: (option: { body: Methods_1izjkiy['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, Methods_1izjkiy['post']['resHeaders'], Methods_1izjkiy['post']['status']>(prefix, PATH7, POST, option).send(),
        /**
         * @param option.body - メールアドレス、名前、パスワードを含めたjson
         */
        $post: (option: { body: Methods_1izjkiy['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, Methods_1izjkiy['post']['resHeaders'], Methods_1izjkiy['post']['status']>(prefix, PATH7, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH7}`,
      },
    },
    /**
     * @returns OK
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, '', GET, option).json(),
    /**
     * @returns OK
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, '', GET, option).json().then(r => r.body),
    $path: () => `${prefix}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
