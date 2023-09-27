<template>
  <UiHeader />
  <div class="p-2">
    <div class="text-lg font-bold !text-primary">過去問ファイル</div>
    <UiFileUploadButton
      v-model:files="files"
      label="過去問・答えをアップロード"
    />
    <v-select
      label="ファイルの種類"
      icon="fa-caret-down"
      :items="fileTypeItems"
      item-title="ja"
      item-value="en"
      v-model="fileType"
    />
  </div>
  <div class="p-2">
    <div class="text-lg font-bold !text-primary">講義情報</div>
    <div>
      <v-text-field
        v-model="lectureName"
        label="講義名"
        prepend-icon="mdi-school"
      />
      <v-text-field
        v-model="teacherName"
        label="教員名"
        prepend-icon="mdi-account"
      />
    </div>
    <div class="flex justify-center">
      <v-btn class="" color="primary" @click="searchLecture">講義を検索</v-btn>
    </div>
    <div v-if="lectures && lectures.length > 0">
      <v-text-field label="年度" v-model.number="year" />
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
      />
    </div>
    <div v-else-if="lectures && lectures.length == 0" class="p-2">
      <UiAddLectureDialog v-model:dialog="showModal" />
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
  const fileType = ref<FileType>();
  const year = ref(new Date().getFullYear());
  const teacherName = ref("");
  const lectureName = ref("");
  const selectedLectureId = ref<string>();
  const selectedPastExamType = ref<PastExamType>();

  // 選択肢
  const lectures = ref<Lecture[]>();
  const { array: fileTypeItems } = useFileType();
  const { array: pastExamTypeItems } = usePastExamType();

  // 表示の制御用
  const showModal = ref(false);
  const searchLecture = async () => {
    if (!lectureName.value && !teacherName.value) return;
    // TODO: エラーメッセージを表示
    const client = useClient();
    lectures.value = (
      await client.lectures.search.$post({
        body: {
          teacherName: teacherName.value,
          lectureName: lectureName.value
        }
      })
    ).lectures; // TODO: エラーハンドリング && エラーメッセージの表示
  };

  const isFilled = computed(
    () =>
      !!(
        files.value[0] &&
        fileType.value &&
        selectedLectureId.value &&
        selectedPastExamType.value &&
        year.value
      )
  );
  const upload = async () => {
    if (!isFilled.value) return;
    const client = useClient();

    // TODO: エラーハンドリング && エラーメッセージの表示
    // TODO: バックエンドがlecturesにlecture.examsの情報を入れてくれるようになったら、
    // 新しくexamを作るより前にlecture.examsのexamの情報を使うようにする
    // (現状、一つのlectureに対して、同じテストが大量にできる実装になっている)
    const examRes = await client.exams.$post({
      body: {
        type: selectedPastExamType.value,
        lecture_id: selectedLectureId.value,
        year: year.value
      }
    });

    // TODO: エラーハンドリング && エラーメッセージの表示
    await client.files.$post({
      body: {
        pastExamFile: files.value[0],
        type: fileType.value,
        userId: "e62ec20b-93fe-4811-8912-87ba738b4f0a", // TODO: CookieからユーザーIDを持ってくる
        examId: examRes.exam?.id
      }
    });
  };
</script>
