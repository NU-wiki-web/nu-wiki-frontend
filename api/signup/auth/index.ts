/* eslint-disable */
export type Methods = {
  post: {
    status: 200

    /** 認証に成功したら、再びメールアドレスを返す */
    resBody: {
      email: string
    }

    /** メールアドレスを含めたjson */
    reqBody: {
      email: string
    }
  }
}
