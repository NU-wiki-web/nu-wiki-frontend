<template>
  <UiHeader></UiHeader>
  <div class="p-2">
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
  <div class="p-2">
    <div class="text-lg font-bold text-primary">講義情報</div>
    <div>
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
    </div>
    <div class="flex justify-center">
      <v-btn class="" color="primary" @click="searchLecture">講義を検索</v-btn>
    </div>
    <div v-if="lectures">
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
        <template v-slot:selection="{ item }">
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
    <div v-if="lectures && lectures.length == 0" class="p-2">
      <UiAddLectureDialog
        v-model:dialog="showModal"
        v-model:departmentId="department"
        v-model:year="year"
      />
    </div>
    <div class="flex justify-center">
      <v-btn :disabled="!isFilled" color="primary" @click="upload"
        >保存する</v-btn
      >
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
  import { useClient } from "~/util/api/useApi";
  import { Lecture } from "~/api/@types";
  import { faculties } from "~~/entities/faculties";
  import { years } from "~~/entities/years";

  // POSTするデータ
  const files = ref<File[]>([]);
  const fileType = ref<FileType>();
  const department = ref();
  const year = ref();
  const selectedLecture = ref<Lecture>();
  const selectedPastExamType = ref<PastExamType>();

  // 選択肢
  const lectures = ref<Lecture[]>();
  const { ja: fileTypes } = useFileType();
  const { array: pastExamTypeItems } = usePastExamType();

  // 表示の制御用
  const showModal = ref(false);
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

  const isFilled = computed(
    () =>
      !!(
        files.value[0] &&
        fileType.value &&
        selectedLecture.value?.name &&
        selectedPastExamType.value
      )
  );

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
        exam_id: selectedLecture.value.name
      }
    });
  };
</script>
