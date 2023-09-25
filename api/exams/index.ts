/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  post: {
    status: 200

    /** OK */
    resBody: {
      exam: {
        /** exam_id */
        id: string
        allOf: Types.Exam_req
      }
    }

    /** テストの名前 */
    reqBody: Types.Exam_req
  }
}
