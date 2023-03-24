/* eslint-disable */
export type Methods = {
  get: {
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
  }
}
