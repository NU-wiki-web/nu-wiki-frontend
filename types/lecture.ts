import { GradeType } from "./grade";
import { TermType } from "./term";

export interface LectureType {
  id: number;
  name: string;
  teacherName: string;
  grade: GradeType;
  year: number;
  term: TermType;
  departmentId: number;
}
