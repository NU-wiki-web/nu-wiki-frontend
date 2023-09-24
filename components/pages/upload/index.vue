<template>
  <UiHeader></UiHeader>
  <div class="p-2">
    <div class="text-lg font-bold !text-primary">過去問ファイル</div>
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
    <div class="text-lg font-bold !text-primary">講義情報</div>
    <div>
      <v-text-field
        v-model="lectureName"
        label="講義名"
        prepend-icon="mdi-school"
      >
      </v-text-field>
      <v-text-field
        v-model="teacherName"
        label="教員名"
        prepend-icon="mdi-account"
      >
      </v-text-field>
      <v-text-field label="年度" v-model.number="year"></v-text-field>
    </div>
    <div class="flex justify-center">
      <v-btn class="" color="primary" @click="searchLecture">講義を検索</v-btn>
    </div>
    <div v-if="lectures && lectures.length > 0">
      <v-select
        label="講義名"
        :items="lectures"
        item-title="lectureName"
        item-value="id"
        prepend-inner-icon="mdi-school"
        bg-color="#fff"
        color="#"
        v-model="selectedLectureId"
      >
        <template v-slot:selection="{ item }">
          <span
            >{{ item.raw.lectureName }} - {{ item.raw.teacherName }} ({{
              item.raw.grade
            }}対象)</span
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
    <div v-else-if="lectures && lectures.length == 0" class="p-2">
      <UiAddLectureDialog v-model:dialog="showModal" v-model:year="year" />
    </div>
    <div class="flex justify-center">
      <v-btn :disabled="!isFilled" color="primary" @click="upload"
        >保存する</v-btn
      >
    </div>
    <div class="flex justify-center">
      <span>{{ isFilledText }}</span>
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

  // POSTするデータ
  const files = ref<File[]>([]);
  const fileType = ref<FileType>();
  const year = ref(new Date().getFullYear());
  const teacherName = ref("");
  const lectureName = ref("");
  const selectedLectureId = ref<string>();
  const selectedPastExamType = ref<PastExamType>();

  // 選択肢
  const lectures = ref<Lecture[]>();
  const { ja: fileTypes } = useFileType();
  const { array: pastExamTypeItems } = usePastExamType();

  // 表示の制御用
  const showModal = ref(false);
  const searchLecture = async () => {
    if (!year.value && !lectureName.value && !teacherName.value) return;
    const client = useClient();
    lectures.value = (
      await client.lectures.search.$post({
        body: {
          teacherName: teacherName.value,
          lectureName: lectureName.value
        }
      })
    ).lectures;
  };

  const isFilled = computed(
    () =>
      !!(
        files.value[0] &&
        fileType.value &&
        selectedLectureId.value &&
        selectedPastExamType.value
      )
  );

  const isFilledText = computed(
    () =>
      `files: ${files.value[0]}, filetype: ${fileType.value}, lecture: ${selectedLectureId.value}, pastExamType: ${selectedPastExamType.value}`
  );

  const upload = async () => {
    if (
      !files.value[0] ||
      !fileType.value ||
      !selectedLectureId.value ||
      !selectedPastExamType.value
    )
      return;
    const client = useClient();
    client.exams.$post({
      body: {
        type: selectedPastExamType.value,
        lecture_id: selectedLectureId.value,
        year: year.value
      }
    });
    client.files.$post({
      body: files.value[0],
      query: {
        type: fileType.value,
        user_id: "hoge",
        exam_id: "hoge"
      }
    });
  };
</script>
