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
        grade: 'B1' | 'B2' | 'B3' | 'B4' | 'M1' | 'M2' | 'D1' | 'D2' | 'D3'
        year: number
        term: '春' | '秋' | '春1' | '春2' | '秋1' | '秋2'
        departmentId: number
      }[]
      total: number
    }

    /** 絞り込み */
    reqBody: {
      grade?: 'B1' | 'B2' | 'B3' | 'B4' | 'M1' | 'M2' | 'D1' | 'D2' | 'D3' | undefined
      year?: number | undefined
      term?: '春' | '秋' | '春1' | '春2' | '秋1' | '秋2' | undefined
      departmentId?: number | undefined
      word?: string | undefined
    }
  }
}
