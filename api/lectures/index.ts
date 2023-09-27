/* eslint-disable */
import type * as Types from "../@types";

export type Methods = {
  get: {
    status: 200;

    /** ok */
    resBody: {
      lectures: Types.Lecture[];
      total: number;
    };
  };

  post: {
    status: 200;
    /** 講義の名前 */
    reqBody: Types.Lecture;
  };
};
