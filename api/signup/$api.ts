import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from './auth'
import type { Methods as Methods1 } from './mail'
import type { Methods as Methods2 } from './register'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8080' : baseURL).replace(/\/$/, '')
  const PATH0 = '/signup/auth'
  const PATH1 = '/signup/mail'
  const PATH2 = '/signup/register'
  const POST = 'POST'

  return {
    auth: {
      /**
       * @param option.body - ワンタイムパスワードを含めたjson
       */
      post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).send(),
      /**
       * @param option.body - ワンタイムパスワードを含めたjson
       */
      $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    mail: {
      /**
       * @param option.body - メールアドレスを含めたjson
       */
      post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, Methods1['post']['resHeaders'], Methods1['post']['status']>(prefix, PATH1, POST, option).send(),
      /**
       * @param option.body - メールアドレスを含めたjson
       */
      $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, Methods1['post']['resHeaders'], Methods1['post']['status']>(prefix, PATH1, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    register: {
      /**
       * @param option.body - 名前、パスワードを含めたjson
       */
      post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, Methods2['post']['resHeaders'], Methods2['post']['status']>(prefix, PATH2, POST, option).send(),
      /**
       * @param option.body - 名前、パスワードを含めたjson
       */
      $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, Methods2['post']['resHeaders'], Methods2['post']['status']>(prefix, PATH2, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
