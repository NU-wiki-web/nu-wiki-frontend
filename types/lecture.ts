import { GradeType } from "./grade";
import { TermType } from "./term";

export interface LectureType {
  id: string;
  lectureName: string;
  teacherName: string;
  grade: GradeType;
  year: number;
  term: TermType;
  departmentId: number;
}
