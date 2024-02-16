/* eslint-disable */
import type { ReadStream } from "fs";

/** 過去問ファイルの追加パラメータ */
export type PastExamPdf = {
  /** 過去問のPDFファイル */
  pastExamFile: File | ReadStream;
  /** 過去問or過去問の解答orその他 */
  type: "past_exam" | "past_exam_answer" | "other";
  /** ユーザーID */
  userId: string;
  /** 試験ID */
  examId: string;
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
  /** 講義に紐づいたテストのリスト */
  exams?: Exam[] | undefined;
};

/** 検索用パラメータ */
export type Lecture_req = {
  teacherName: string;
  lectureName: string;
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
};

/** pdfの詳細 */
export type Pdf = {
  id: string;
  name: string;
  user_id: string;
  exam_id: string;
  type: "past_exam" | "past_exam_answer" | "other";
  created_at: string;
  updated_at: string;
};

/** pdf一覧を返すためのオブジェクト */
export type Pdf_list = {
  pdfs?: Pdf[] | undefined;
  total?: number | undefined;
};

/** examの詳細 */
export type Exam = {
  exam_id: string;
  type: "MIDTERM" | "TERMEND" | "OTHER";
  lecture_id: string;
  year: number;
};

/** examの詳細 */
export type Exam_req = {
  type: "MIDTERM" | "TERMEND" | "OTHER";
  lecture_id: string;
  year: number;
};

/** examの詳細 */
export type Exam_list = {
  exams?: Exam[] | undefined;
  total?: number | undefined;
};

/** エラーレスポンスの基底型（RFC7807準拠） */
export type ErrorResponse = {
  /** エラーの識別子（RFC7807準拠） */
  type: string;
  /** 人間が読める形式のエラーの概要（RFC7807準拠） */
  title?: string | undefined;
  /** 人間が読める形式のエラーの詳細（RFC7807準拠） */
  detail?: string | undefined;
  /** オリジナルAPIサーバが返したHTTPステータスコード（RFC7807準拠） */
  status?: number | undefined;
};
