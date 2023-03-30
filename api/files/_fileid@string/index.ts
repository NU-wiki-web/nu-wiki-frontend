/* eslint-disable */
import type { ReadStream } from 'fs'

export type Methods = {
  put: {
    status: 200
    /** pdfファイル */
    reqBody: (File | ReadStream)
  }

  delete: {
    status: 200
  }
}
