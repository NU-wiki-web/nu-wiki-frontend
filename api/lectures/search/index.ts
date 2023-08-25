/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  post: {
    status: 200

    /** ok */
    resBody: {
      lectures?: Types.Lecture[] | undefined
      total?: number | undefined
    }

    /** 絞り込み */
    reqBody: Types.Lecture_req
  }
}
