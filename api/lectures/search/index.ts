/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  post: {
    status: 200

    /** ok */
    resBody: {
      lectures: Types.Lecture[]
      total: number
    }

    /** 絞り込み */
    reqBody: Partial<Types.Lecture_req>
  }
}
