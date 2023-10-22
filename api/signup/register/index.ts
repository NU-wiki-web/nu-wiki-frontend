/* eslint-disable */
export type Methods = {
  post: {
    status: 200

    resHeaders: {
      'Set-Cookie': string
    }

    /** 名前、パスワードを含めたjson */
    reqBody: {
      name: string
      password: string
    }
  }
}
