/* eslint-disable */
export type Methods = {
  post: {
    status: 200;

    resHeaders: {
      "Set-Cookie": string;
    };

    /** メールアドレス、名前、パスワードを含めたjson */
    reqBody: {
      email: string;
      name: string;
      password: string;
    };
  };
};
