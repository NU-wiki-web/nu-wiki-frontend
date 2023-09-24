/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  post: {
    status: 200

    /** OK */
    resBody: {
      /** exam_id */
      id: string
    } & Types.Exam_req

    /** テストの名前 */
    reqBody: Types.Exam_req
  }
}
