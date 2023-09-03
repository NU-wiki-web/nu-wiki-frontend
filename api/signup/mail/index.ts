/* eslint-disable */
export type Methods = {
  post: {
    status: 200

    resHeaders: {
      'Set-Cookie': string
    }

    /** メールアドレスを含めたjson */
    reqBody: {
      email?: string | undefined
    }
  }
}
