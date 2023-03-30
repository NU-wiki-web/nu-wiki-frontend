<template>
  <div class="bg-teal-600 pt-10 pb-10">
    <v-container>
      <v-row justify="center">
        <v-col cols="6" sm="6" md="3">
          <v-select
            label="学部・学科"
            :items="facultiesOption"
            item-title="name"
            item-value="id"
            prepend-inner-icon="mdi-school"
            bg-color="#fff"
            color="#555"
            v-model="updateDepartment"
          ></v-select>
        </v-col>
        <v-col cols="6" sm="6" md="3">
          <UiSelect
            label="学年"
            :items="grades"
            icon="mdi-stairs-up"
            :selected="grade"
            v-model="updateGrade"
          ></UiSelect>
        </v-col>
        <v-col cols="6" sm="6" md="3">
          <UiSelect
            label="学期"
            :items="terms"
            icon="mdi-format-list-numbered-rtl"
            :selected="term"
            v-model="updateTerm"
          ></UiSelect>
        </v-col>
        <v-col cols="6" sm="6" md="3">
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
import { grades } from "../../../entities/grades";
import { terms } from "../../../entities/terms";
import { years } from "../../../entities/years";
import { faculties } from "../../../entities/faculties";

const facultiesOption = faculties.map((value, index) => {
  return {
    id: index,
    name: value,
  };
});

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
</script>
