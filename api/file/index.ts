/* eslint-disable */
import type { ReadStream } from 'fs'

export type Methods = {
  post: {
    status: 200

    /** OK */
    resBody: {
      file_id: string
    }

    /** pdfファイル */
    reqBody: (File | ReadStream)
  }
}
