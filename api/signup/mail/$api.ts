import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://127.0.0.1:8080' : baseURL).replace(/\/$/, '')
  const PATH0 = '/signup/mail'
  const POST = 'POST'

  return {
    /**
     * @param option.body - メールアドレスを含めたjson
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<void, Methods0['post']['resHeaders'], Methods0['post']['status']>(prefix, PATH0, POST, option).send(),
    /**
     * @param option.body - メールアドレスを含めたjson
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<void, Methods0['post']['resHeaders'], Methods0['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
