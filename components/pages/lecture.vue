<template>
  <UiHeader></UiHeader>
  <UiTemplatesSearch
    v-model:department="department"
    v-model:grade="grade"
    v-model:term="term"
    v-model:year="year"
  ></UiTemplatesSearch>
  <UiTemplatesLectureList :lectures="lectures"></UiTemplatesLectureList>
</template>

<script setup lang="ts">
const department = ref<string>();
const grade = ref<string>();
const term = ref<string>();
const year = ref<number>();

const lectures = [
  {
    id: 1,
    name: "宇宙人とのコミュニケーション法",
    teacher_name: "沖田博士",
    grade: "B2",
    year: 2020,
    term: "春",
    department_id: 3,
  },
  {
    id: 2,
    name: "量子コンピューター入門",
    teacher_name: "高橋教授",
    grade: "B3",
    year: 2021,
    term: "春",
    department_id: 1,
  },
  {
    id: 3,
    name: "自然言語処理入門",
    teacher_name: "山田先生",
    grade: "B2",
    year: 2020,
    term: "秋",
    department_id: 2,
  },
  {
    id: 4,
    name: "情報セキュリティ基礎",
    teacher_name: "田中教授",
    grade: "B3",
    year: 2021,
    term: "秋",
    department_id: 4,
  },
  {
    id: 5,
    name: "アルゴリズムとデータ構造",
    teacher_name: "鈴木先生",
    grade: "B1",
    year: 2022,
    term: "春",
    department_id: 1,
  },
  {
    id: 6,
    name: "機械学習入門",
    teacher_name: "山本教授",
    grade: "B2",
    year: 2020,
    term: "春",
    department_id: 2,
  },
  {
    id: 7,
    name: "Web開発基礎",
    teacher_name: "松本先生",
    grade: "B1",
    year: 2022,
    term: "秋",
    department_id: 4,
  },
  {
    id: 8,
    name: "ソフトウェア工学入門",
    teacher_name: "吉田先生",
    grade: "B2",
    year: 2020,
    term: "秋",
    department_id: 3,
  },
  {
    id: 9,
    name: "データベース入門",
    teacher_name: "中村先生",
    grade: "B1",
    year: 2022,
    term: "春",
    department_id: 2,
  },
  {
    id: 10,
    name: "プログラミング言語入門",
    teacher_name: "木村先生",
    grade: "B1",
    year: 2022,
    term: "春",
    department_id: 1,
  },
  {
    id: 11,
    name: "数理論理学",
    teacher_name: "小林先生",
    grade: "B3",
    year: 2021,
    term: "秋",
    department_id: 3,
  },
];
</script>
