/* eslint-disable */
import type { ReadStream } from "fs";

/** 過去問ファイルの追加パラメータ */
export type PastExamPdf = {
  /** 過去問のPDFファイル */
  pastExamFile?: (File | ReadStream) | undefined;
  /** 過去問or過去問の解答orその他 */
  type?: "past_exam" | "past_exam_answer" | "other" | undefined;
  /** ユーザーID */
  userId?: string | undefined;
  /** 試験ID */
  examId?: string | undefined;
};

/** 講義の詳細 */
export type Lecture = {
  id?: string | undefined;
  lectureName?: string | undefined;
  teacherName?: string | undefined;
  grade?:
    | "B1"
    | "B2"
    | "B3"
    | "B4"
    | "M1"
    | "M2"
    | "D1"
    | "D2"
    | "D3"
    | undefined;
  term?: "春" | "秋" | "春1" | "春2" | "秋1" | "秋2" | undefined;
};

/** 検索用パラメータ */
export type Lecture_req = {
  grade?:
    | "B1"
    | "B2"
    | "B3"
    | "B4"
    | "M1"
    | "M2"
    | "D1"
    | "D2"
    | "D3"
    | null
    | undefined;
  term?: "春" | "秋" | "春1" | "春2" | "秋1" | "秋2" | null | undefined;
  teacherName?: string | undefined;
  lectureName?: string | undefined;
};

/** pdfの詳細 */
export type Pdf = {
  id?: string | undefined;
  name?: string | undefined;
  user_id?: string | undefined;
  exam_id?: string | undefined;
  type?: "past_exam" | "past_exam_answer" | "other" | undefined;
  created_at?: string | undefined;
  updated_at?: string | undefined;
};

/** pdf一覧を返すためのオブジェクト */
export type Pdf_list = {
  pdfs?: Pdf[] | undefined;
  total?: number | undefined;
};

/** examの詳細 */
export type Exam = {
  exam_id?: string | undefined;
  type?: "MIDTERM" | "TERMEND" | "OTHER" | undefined;
  lecture_id?: string | undefined;
  year?: number | undefined;
};

/** examの詳細 */
export type Exam_req = {
  type?: "MIDTERM" | "TERMEND" | "OTHER" | undefined;
  lecture_id?: string | undefined;
  year?: number | undefined;
};

/** examの詳細 */
export type Exam_list = {
  exams?: Exam[] | undefined;
  total?: number | undefined;
};
