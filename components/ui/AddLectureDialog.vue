<template>
  <div class="text-center">
    <v-dialog v-model="isShow" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> 新しい講義を登録 </v-btn>
      </template>

      <v-card class="w-96">
        <v-card-title class="headline text-primary">講義追加</v-card-title>
        <v-col>
          <v-select
            label="学部・学科"
            :items="facultiesOption"
            item-title="name"
            item-value="id"
            prepend-inner-icon="mdi-school"
            bg-color="#fff"
            color="#555"
            v-model="departmentId"
          ></v-select
        ></v-col>
        <v-col>
          <UiSelect
            label="年度"
            :items="years"
            icon="mdi-calendar-blank"
            :selected="year"
            v-model="year"
          ></UiSelect>
        </v-col>
        <v-col>
          <UiSelect
            label="学年"
            :items="grades"
            icon="mdi-stairs-up"
            :selected="grade"
            v-model="grade"
          ></UiSelect>
        </v-col>
        <v-col>
          <UiSelect
            label="学期"
            :items="terms"
            icon="mdi-format-list-numbered-rtl"
            :selected="term"
            v-model="term"
          ></UiSelect>
        </v-col>
        <v-col>
          <v-text-field
            label="講義名"
            prepend-inner-icon="mdi-book"
            bg-color="#fff"
            color="#555"
            v-model="name"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="教員名"
            prepend-inner-icon="mdi-account"
            bg-color="#fff"
            color="#555"
            v-model="teacherName"
          ></v-text-field>
        </v-col>
        <v-card-actions>
          <v-btn
            color="primary"
            elevated
            block
            @click="emit('update:dialog', false)"
            >講義を追加</v-btn
          >
        </v-card-actions>
        <v-card-actions>
          <v-btn color="gray" block @click="emit('update:dialog', false)"
            >キャンセル</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
  import { GradeType } from "~~/types/grade";
  import { TermType } from "~~/types/term";
  import { faculties } from "~~/entities/faculties";
  import { terms } from "~~/entities/terms";
  import { years } from "~~/entities/years";
  import { grades } from "~~/entities/lecture";
  import { useClient } from "~~/util/api/useApi";
  const props = defineProps<{
    dialog: boolean;
    departmentId?: number;
    year?: number;
  }>();
  const emit = defineEmits<{
    (event: "update:dialog", value: boolean): void;
    (event: "update:departmentId", value: number): void;
    (event: "update:year", value: number): void;
  }>();
  const isShow = computed({
    get: () => props.dialog,
    set: (value) => emit("update:dialog", value)
  });
  // OPTION
  const facultiesOption = faculties.map((value, index) => {
    return {
      id: index,
      name: value
    };
  });

  // POSTするデータ
  const year = computed({
    get: () => props.year,
    set: (value) => emit("update:year", value)
  });
  const departmentId = computed({
    get: () => props.departmentId,
    set: (value) => emit("update:departmentId", value)
  });
  const term = ref<TermType>();
  const name = ref("");
  const teacherName = ref("");
  const grade = ref<GradeType>();

  // データをPOSTする
  const addLecture = () => {
    const client = useClient();
    client.lectures.$post({
      body: {
        departmentId: departmentId.value,
        year: year.value,
        term: term.value,
        name: name.value,
        teacherName: teacherName.value,
        grade: grade.value
      }
    });
  };
</script>
