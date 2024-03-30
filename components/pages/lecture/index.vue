<template>
  <UiHeader />
  <UiTemplatesLectureSearch @click="search" />
  <div v-if="isLoading" class="mt-10 flex items-center justify-center">
    <UiLoading />
  </div>
  <div v-else-if="isError" class="mt-10 flex items-center justify-center">
    予期せぬエラーが発生しました。もう一度お試しください。
  </div>
  <div v-else>
    <UiTemplatesLectureList
      v-model:lectures="lectures"
      :handle-click="openSelectModal"
    ></UiTemplatesLectureList>
  </div>
  <div class="fixed bottom-0 flex w-full justify-end">
    <v-btn @click="onClickAddLectureButton" class="m-4" color="#006e4f" rounded>
      過去問を追加 +
    </v-btn>
  </div>
  <!-- 詳細情報用のモーダル -->
  <PagesLectureSelectModal
    v-if="showSelectModal"
    @close="closeSelectModal"
    :lecture="selectedLecture"
  >
  </PagesLectureSelectModal>
</template>

<script setup lang="ts">
  import { Lecture_req, Lecture } from "~~/api/@types/index";

  const client = useClient();

  const lectures = ref<Lecture[]>([]);
  const isLoading = ref<boolean>(true);
  const isError = ref<boolean>(false);
  const router = useRouter();
  client.lectures
    .get()
    .then(async (res) => {
      lectures.value = await res.lectures;
    })
    .catch((err) => {
      console.error(err);
      isError.value = true;
    })
    .finally(() => {
      isLoading.value = false;
    });

  const search = async function (
    teacherName: Lecture_req["teacherName"],
    lectureName: Lecture_req["lectureName"]
  ) {
    isLoading.value = true;
    await client.lectures.search
      .$post({
        body: {
          teacherName,
          lectureName
        }
      })
      .then((res) => {
        lectures.value = res.lectures;
      })
      .catch((err) => {
        console.error(err);
        isError.value = true;
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

  // モーダルの処理
  /* pdfの詳細表示 */
  const showSelectModal = ref(false); // モーダルを表示するか
  const selectedLecture = ref<Lecture | undefined>(undefined);

  const openSelectModal = (lectureId: string) => {
    showSelectModal.value = true;
    selectedLecture.value = lectures.value.find((l) => l.id == lectureId);
  };

  const closeSelectModal = () => {
    showSelectModal.value = false;
  };

  const onClickAddLectureButton = async () => {
    try {
      await router.push("/upload");
    } catch (e) {
      console.error(e);
    }
  };
</script>
