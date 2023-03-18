<template>
  <div class="bg-teal-500">
    <v-container>
      <v-row justify="center">
        <v-col cols="11" sm="6" md="3">
          <UiSelect
            label="学部・学科"
            :items="faculties"
            icon="mdi-school"
            :selected="department"
            v-model="updateDepartment"
          ></UiSelect>
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
          <UiSearchBar :handleClick="search" v-model:text="searchWord"></UiSearchBar>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
interface Props {
  department: string;
  grade: string;
  term: string;
  year: number;
}

interface Emits {
  (
    e: "update:department" | "update:grade" | "update:term" | "update:year",
    value: string | number
  ): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const updateProp = function (prop: keyof Props) {
  return computed({
    get: () => props[prop],
    set: (value) => {
      emits(`update:${prop}`, value);
    },
  });
};

const updateDepartment = updateProp("department");
const updateGrade = updateProp("grade");
const updateTerm = updateProp("term");
const updateYear = updateProp("year");

const searchWord = ref<string | undefined>(undefined);

const search = function () {
  console.log(searchWord);
};

// セレクトボックス用データ バックから取得する？
const faculties = [
  "文学部",
  "教育学部 人間発達科学科 生涯教育開発コース",
  "教育学部 人間発達科学科 学校教育情報コース",
  "教育学部 人間発達科学科 国際社会文化コース",
  "教育学部 人間発達科学科 心理社会行動コース",
  "教育学部 人間発達科学科 発達教育臨床コース",
  "法学部 法律・政治学科",
  "経済学部 経済学科",
  "経済学部 経営学科",
  "情報学部 自然情報学科",
  "情報学部 人間・社会情報学科",
  "情報学部 コンピュータ科学科",
  "理学部 数理学科",
  "理学部 物理学科",
  "理学部 化学科",
  "理学部 生命理学科",
  "理学部 地球惑星科学科",
  "医学部 医学科",
  "医学部 保健学科 看護学専攻",
  "医学部 保健学科 放射線技術科学専攻",
  "医学部 保健学科 検査技術科学専攻",
  "医学部 保健学科 理学療法学専攻",
  "医学部 保健学科 作業療法学専攻",
  "工学部 化学生命工学科",
  "工学部 物理工学科",
  "工学部 マテリアル工学科",
  "工学部 電気電子情報工学科",
  "工学部 機械・航空宇宙工学科",
  "工学部 エネルギー理工学科",
  "工学部 環境土木・建築学科",
  "農学部 生物環境科学科",
  "農学部 資源生物科学科",
  "農学部 応用生命科学科",
];
const grades = ["B1", "B2", "B3", "B4", "M1", "M2", "D1", "D2", "D3"];
const terms = ["春", "秋", "春1", "春2", "秋1", "秋2"];
const years = [2020, 2021, 2022, 2023];
</script>
