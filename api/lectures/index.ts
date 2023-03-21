/* eslint-disable */
export type Methods = {
  get: {
    status: 200

    /** ok */
    resBody: {
      lectures: {
        id: number
        name: string
        teacher_name: string
        grade: string
        year: number
        term: string
        department_id: number
      }[]
      total: number
    }
  }
}
