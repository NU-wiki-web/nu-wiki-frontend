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
  id?: number | undefined
  name?: string | undefined
  teacherName?: string | undefined
  grade?: 'B1' | 'B2' | 'B3' | 'B4' | 'M1' | 'M2' | 'D1' | 'D2' | 'D3' | undefined
  year?: number | undefined
  term?: '春' | '秋' | '春1' | '春2' | '秋1' | '秋2' | undefined
  departmentId?: number | undefined
}

/** 検索用パラメータ */
export type Lecture_req = {
  grade?: 'B1' | 'B2' | 'B3' | 'B4' | 'M1' | 'M2' | 'D1' | 'D2' | 'D3' | undefined
  year?: number | undefined
  term?: '春' | '秋' | '春1' | '春2' | '秋1' | '秋2' | undefined
  departmentId?: number | undefined
  word?: string | undefined
}
