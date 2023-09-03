/* eslint-disable */
export type Methods = {
  post: {
    status: 200

    resHeaders: {
      'Set-Cookie': string
    }

    /** メールアドレス、名前、パスワードを含めたjson */
    reqBody: {
      email?: string | undefined
      name?: string | undefined
      password?: string | undefined
    }
  }
}
