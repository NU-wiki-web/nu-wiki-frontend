/* eslint-disable */
import type { ReadStream } from "fs";

export type Methods = {
  get: {
    status: 200;
    /** OK */
    resBody: Blob;
  };

  put: {
    status: 200;
    /** pdfファイル */
    reqBody: File | ReadStream;
  };

  delete: {
    status: 200;
  };
};
