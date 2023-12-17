import { useEnJaEntiries } from "./useEntities";
import { PastExamPdf } from "api/@types";

export type PastExamType = "MIDTERM" | "TERMEND" | "OTHER";
export const usePastExamType = () =>
  useEnJaEntiries<PastExamType>({
    MIDTERM: "中間試験",
    TERMEND: "期末試験",
    OTHER: "その他"
  });

export type FileType = PastExamPdf["type"];
export const useFileType = () =>
  useEnJaEntiries<FileType>({
    past_exam: "過去問",
    past_exam_answer: "解答",
    other: "その他"
  });
