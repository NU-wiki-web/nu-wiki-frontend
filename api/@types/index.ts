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
}

/** 検索用パラメータ */
export type Lecture_req = {
  grade?: 'B1' | 'B2' | 'B3' | 'B4' | 'M1' | 'M2' | 'D1' | 'D2' | 'D3' | null | undefined
  year?: number | null | undefined
  term?: '春' | '秋' | '春1' | '春2' | '秋1' | '秋2' | null | undefined
  departmentId?: number | null | undefined
  teacherName?: string | undefined
  lectureName?: string | undefined
}

/** pdfの詳細 */
export type Pdf = {
  id?: number | undefined
  name?: string | undefined
  user_id?: number | undefined
  exam_id?: number | undefined
  type?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}

/** pdf一覧を返すためのオブジェクト */
export type Pdf_list = {
  pdfs?: Pdf[] | undefined
  total?: number | undefined
}

/** examの詳細 */
export type Exam = {
  exam_id?: number | undefined
  name?: string | undefined
  lecture_id?: number | undefined
  year?: number | undefined
}

/** examの詳細 */
export type Exam_list = {
  exams?: Exam[] | undefined
  total?: number | undefined
}
