import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from './_exam_id/files'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://127.0.0.1:8080' : baseURL).replace(/\/$/, '')
  const PATH0 = '/exams'
  const PATH1 = '/files'
  const GET = 'GET'

  return {
    _exam_id: (val0: number | string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        files: {
          /**
           * @returns ok
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
          /**
           * @returns ok
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH1}`
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
