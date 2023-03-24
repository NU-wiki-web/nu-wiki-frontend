/* eslint-disable */
export type Methods = {
  post: {
    status: 200

    /** ok */
    resBody: {
      lectures: {
        id: number
        name: string
        teacherName: string
        grade: string
        year: number
        term: string
        departmentId: number
      }[]
      total: number
    }

    /** 絞り込み */
    reqBody: {
      grade: string
      year: number
      term: string
      departmentId: number
      word: string
    }
  }
}
