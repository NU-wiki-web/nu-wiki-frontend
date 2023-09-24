/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  get: {
    status: 200
    /** OK */
    resBody: Types.Pdf_list
  }

  post: {
    status: 200

    /** OK */
    resBody: {
      fileId: string
    }

    reqFormat: FormData
    /** 講義と講義のテストを指定して講義資料をアップロードする */
    reqBody: Types.PastExamFile
  }
}
