<template>
  <div class="bg-teal-500">
    <v-container>
      <v-row justify="center">
        <v-col cols="11" sm="6" md="3">
          <v-select
            label="学部・学科"
            :items="faculties"
            item-title="name"
            item-value="id"
            prepend-inner-icon="mdi-school"
            bg-color="#fff"
            color="#555"
            v-model="updateDepartment"
          ></v-select>
        </v-col>
        <v-col cols="11" sm="6" md="3">
          <UiSelect
            label="学年"
            :items="grades"
            icon="mdi-stairs-up"
            :selected="grade"
            v-model="updateGrade"
          ></UiSelect>
        </v-col>
        <v-col cols="11" sm="6" md="3">
          <UiSelect
            label="学期"
            :items="terms"
            icon="mdi-format-list-numbered-rtl"
            :selected="term"
            v-model="updateTerm"
          ></UiSelect>
        </v-col>
        <v-col cols="11" sm="6" md="3">
          <UiSelect
            label="年度"
            :items="years"
            icon="mdi-calendar-blank"
            :selected="year"
            v-model="updateYear"
          ></UiSelect>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="11">
          <UiSearchBar @click="onClick"></UiSearchBar>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
interface Props {
  departmentId: number;
  grade: string;
  term: string;
  year: number;
}

interface Emits {
  (
    e: "update:departmentId" | "update:grade" | "update:term" | "update:year",
    value: string | number
  ): void;
  (e: "click", value: string | undefined): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const updateProp = function (prop: keyof Props) {
  return computed({
    get: () => props[prop],
    set: (value) => {
      console.log(value);
      // if (value !== null && typeof value === "object") return emits("update:department", value.id);
      return emits(`update:${prop}`, value);
    },
  });
};

const updateDepartment = updateProp("departmentId");
const updateGrade = updateProp("grade");
const updateTerm = updateProp("term");
const updateYear = updateProp("year");

const onClick = function (value: string | undefined) {
  emits("click", value);
};

// セレクトボックス用データ バックから取得する？
const faculties = [
  { id: 1, name: "文学部" },
  { id: 2, name: "教育学部 人間発達科学科 生涯教育開発コース" },
  { id: 3, name: "教育学部 人間発達科学科 学校教育情報コース" },
  { id: 4, name: "教育学部 人間発達科学科 国際社会文化コース" },
  { id: 5, name: "教育学部 人間発達科学科 心理社会行動コース" },
  { id: 6, name: "教育学部 人間発達科学科 発達教育臨床コース" },
  { id: 7, name: "法学部 法律・政治学科" },
  { id: 8, name: "経済学部 経済学科" },
  { id: 9, name: "経済学部 経営学科" },
  { id: 10, name: "情報学部 自然情報学科" },
  { id: 11, name: "情報学部 人間・社会情報学科" },
  { id: 12, name: "情報学部 コンピュータ科学科" },
  { id: 13, name: "理学部 数理学科" },
  { id: 14, name: "理学部 物理学科" },
  { id: 15, name: "理学部 化学科" },
  { id: 16, name: "理学部 生命理学科" },
  { id: 17, name: "理学部 地球惑星科学科" },
  { id: 18, name: "医学部 医学科" },
  { id: 19, name: "医学部 保健学科 看護学専攻" },
  { id: 20, name: "医学部 保健学科 放射線技術科学専攻" },
  { id: 21, name: "医学部 保健学科 検査技術科学専攻" },
  { id: 22, name: "医学部 保健学科 理学療法学専攻" },
  { id: 23, name: "医学部 保健学科 作業療法学専攻" },
  { id: 24, name: "工学部 化学生命工学科" },
  { id: 25, name: "工学部 物理工学科" },
  { id: 26, name: "工学部 マテリアル工学科" },
  { id: 27, name: "工学部 電気電子情報工学科" },
  { id: 28, name: "工学部 機械・航空宇宙工学科" },
  { id: 29, name: "工学部 エネルギー理工学科" },
  { id: 30, name: "工学部 環境土木・建築学科" },
  { id: 31, name: "農学部 生物環境科学科" },
  { id: 32, name: "農学部 資源生物科学科" },
  { id: 33, name: "農学部 応用生命科学科" },
];
const grades = ["B1", "B2", "B3", "B4", "M1", "M2", "D1", "D2", "D3"];
const terms = ["春", "秋", "春1", "春2", "秋1", "秋2"];
const years = [2020, 2021, 2022, 2023];
</script>
