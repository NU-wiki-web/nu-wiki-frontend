<template>
  <div>
    <div class="text-lg font-bold text-primary">過去問ファイル</div>
    <UiFileUploadButton
      v-model:files="files"
      label="過去問・答えをアップロード"
    />
    <UiSelect
      label="ファイルの種類"
      icon="fa-caret-down"
      :items="fileTypes"
      v-model:selected="fileType"
    />
  </div>
  <div>
    <div class="text-lg font-bold text-primary">講義情報</div>
    <v-select
      label="学部・学科"
      :items="faculties"
      item-title="name"
      item-value="id"
      prepend-inner-icon="mdi-school"
      bg-color="#fff"
      color="#555"
      v-model="department"
    ></v-select>
    <UiSelect
      label="年度"
      :items="years"
      icon="mdi-calendar-blank"
      :selected="year"
      v-model="year"
    ></UiSelect>
    <v-btn color="primary" @click="searchLecture">講義を検索</v-btn>
    <div v-if="lectures.length > 0">
      <v-select
        label="講義名"
        :items="lectures"
        item-title="name"
        item-value="name"
        prepend-inner-icon="mdi-school"
        bg-color="#fff"
        color="#"
        v-model="selectedLecture"
      >
        <template v-slot:selection="{ item, index }">
          <span
            >{{ item.raw.name }} - {{ item.raw.teacherName }} ({{
              item.raw.year
            }}年度 {{ item.raw.grade }}対象)</span
          >
        </template>
      </v-select>
      <v-select
        label="テスト"
        :items="pastExamTypeItems"
        item-title="ja"
        item-value="en"
        prepend-inner-icon="mdi-school"
        bg-color="#fff"
        color="primary"
        v-model="selectedPastExamType"
      ></v-select>
    </div>
    <div>
      <v-btn color="primary" @click="upload">保存する</v-btn>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {
    PastExamType,
    FileType,
    useFileType,
    usePastExamType
  } from "~/entities/pastExam";
  import { faculties, years } from "~/entities/lecture";
  import { useClient } from "~/util/api/useApi";
  import { Lecture } from "~/api/@types";

  // POSTするデータ
  const files = ref<File[]>([]);
  const fileType = ref<FileType>();
  const department = ref();
  const year = ref();
  const selectedLecture = ref<Lecture>();
  const selectedPastExamType = ref<PastExamType>();

  // 選択肢
  const lectures = ref<Lecture[]>([]);
  const { ja: fileTypes } = useFileType();
  const { array: pastExamTypeItems } = usePastExamType();

  const searchLecture = async () => {
    if (!department.value || !year.value) return;
    const client = useClient();
    lectures.value = (
      await client.lectures.search.$post({
        body: {
          departmentId: department.value,
          year: year.value
        }
      })
    ).lectures;
  };

  const upload = () => {
    if (
      !files.value[0] ||
      !fileType.value ||
      !selectedLecture.value?.name ||
      !selectedPastExamType.value
    )
      return;
    const client = useClient();
    client.files.$post({
      body: files.value[0],
      query: {
        type: fileType.value,
        user_id: "hoge",
        lecture_id: selectedLecture.value.name
      }
    });
  };

  watch([files, fileType, department, year], () => {
    console.log(files.value);
    console.log(fileType.value);
    console.log(department.value);
    console.log(year.value);
  });
</script>
