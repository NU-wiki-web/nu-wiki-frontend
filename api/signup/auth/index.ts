/* eslint-disable */
export type Methods = {
  post: {
    status: 200;

    /** 認証に成功したら、再びメールアドレスを返す */
    resBody: {
      email?: string | undefined;
    };

    /** ワンタイムパスワードを含めたjson */
    reqBody: {
      oneTimePassword?: string | undefined;
    };
  };
};
