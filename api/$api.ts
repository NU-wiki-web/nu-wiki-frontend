import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './file'
import type { Methods as Methods2 } from './file/_file_id@string'
import type { Methods as Methods3 } from './files'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://host.docker.internal:8080' : baseURL).replace(/\/$/, '')
  const PATH0 = '/file'
  const PATH1 = '/files'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    file: {
      _file_id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          /**
           * @param option.body - pdfファイル
           */
          put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods2['put']['status']>(prefix, prefix1, PUT, option).send(),
          /**
           * @param option.body - pdfファイル
           */
          $put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods2['put']['status']>(prefix, prefix1, PUT, option).send().then(r => r.body),
          /**
           * @param option.body - pdfファイル
           */
          delete: (option: { body: Methods2['delete']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * @param option.body - pdfファイル
           */
          $delete: (option: { body: Methods2['delete']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods2['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * @param option.body - pdfファイル
       * @returns OK
       */
      post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH0, POST, option).json(),
      /**
       * @param option.body - pdfファイル
       * @returns OK
       */
      $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    files: {
      /**
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    /**
     * @returns OK
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, '', GET, option).json(),
    /**
     * @returns OK
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, '', GET, option).json().then(r => r.body),
    $path: () => `${prefix}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
