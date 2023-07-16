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
    <v-text-field
      label="年度"
      :placeholder="String(new Date().getFullYear())"
      v-model.number="year"
    ></v-text-field>
  </div>
  <div class="p-2">
    <div class="text-lg font-bold !text-primary">講義情報</div>
    <div>
      <v-text-field
        label="講義名"
        placeholder="線形代数学I"
        v-model="lectureName"
      ></v-text-field>
      <v-text-field
        label="担当教員"
        placeholder="名大 太郎"
        v-model="teacherName"
      ></v-text-field>
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

  // POSTするデータ
  const files = ref<File[]>([]);
  const year = ref<number>(new Date().getFullYear());
  const fileType = ref<FileType>();
  const department = ref();
  const lectureName = ref<string>();
  const teacherName = ref<string>();
  const selectedLecture = ref<string>();
  const selectedPastExamType = ref<PastExamType>();

  // 選択肢
  const lectures = ref<Lecture[]>();
  const { ja: fileTypes } = useFileType();
  const { array: pastExamTypeItems } = usePastExamType();

  // 表示の制御用
  const showModal = ref(false);
  const searchLecture = async () => {
    if (!lectureName.value || !teacherName.value) return;
    const client = useClient();
    lectures.value =
      (
        await client.lectures.search.$post({
          body: {
            lectureName: lectureName.value,
            teacherName: teacherName.value
          }
        })
      ).lectures ?? [];
  };

  const isFilled = computed(
    () =>
      !!(
        files.value[0] &&
        fileType.value &&
        year.value &&
        selectedLecture.value &&
        selectedPastExamType.value
      )
  );

  const upload = () => {
    if (
      !files.value[0] ||
      !fileType.value ||
      !selectedLecture.value ||
      !selectedPastExamType.value
    ) {
      console.error("値が足りません！");
      return;
    }
    const client = useClient();
    client.files.$post({
      body: files.value[0],
      query: {
        type: fileType.value,
        user_id: "hoge", // TODO: ユーザーIDを追加する処理を書く
        exam_id: selectedLecture.value // TODO: バックエンドの仕様に合わせて変える必要あり
      },
      config: {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    });
  };
</script>
