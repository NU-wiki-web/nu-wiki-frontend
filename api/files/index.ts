/* eslint-disable */
import type { ReadStream } from 'fs'
import type * as Types from '../@types'

export type Methods = {
  get: {
    status: 200
    /** OK */
    resBody: Types.Pdf_list
  }

  post: {
    query: Types.FileType & Types.FileUserId & Types.FileExamId
    status: 200

    /** OK */
    resBody: {
      fileId?: string | undefined
    }

    /** 講義と講義のテストを指定して講義資料をアップロードする */
    reqBody: (File | ReadStream)
  }
}
