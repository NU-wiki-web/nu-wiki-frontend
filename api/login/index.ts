/* eslint-disable */
export type Methods = {
  post: {
    status: 200;

    resHeaders: {
      "Set-Cookie": string;
    };

    /** メールアドレスとパスワードを含めたjson */
    reqBody: {
      email: string;
      password: string;
    };
  };
};
