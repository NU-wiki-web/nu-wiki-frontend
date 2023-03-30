/* eslint-disable */
export type FileType = {
  /** 過去問or過去問の解答orその他 */
  type: 'past_exam' | 'past_exam_answer' | 'other'
}

export type FileUserId = {
  /** ユーザーID */
  user_id: string
}

export type FileExamId = {
  /** 試験ID */
  exam_id: string
}

/** 講義の詳細 */
export type Lecture = {
  name?: string | undefined
  teacherName?: string | undefined
  grade?: string | undefined
  year?: number | undefined
  term?: string | undefined
  departmentId?: number | undefined
}

/** 検索用パラメータ */
export type Lecture_req = {
  grade?: string | undefined
  year?: number | undefined
  term?: string | undefined
  departmentId?: number | undefined
  word?: string | undefined
}
