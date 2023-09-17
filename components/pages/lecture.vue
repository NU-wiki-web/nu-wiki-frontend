<template>
  <UiHeader />
  <UiTemplatesSearch @click="search" />
  <div v-if="isLoading" class="mt-10 flex items-center justify-center">
    <UiLoading />
  </div>
  <div v-else-if="isError" class="mt-10 flex items-center justify-center">
    予期せぬエラーが発生しました。もう一度お試しください。
  </div>
  <div v-else>
    <UiTemplatesLectureList
      v-model:lectures="lectures"
      :handleClick="pushDetailPage"
    />
  </div>
</template>

<script setup lang="ts">
  import { useClient } from "~/util/api/useApi";
  import { GradeType } from "~~/types/grade";
  import { TermType } from "~~/types/term";
  import { Lecture_req, Lecture } from "~~/api/@types/index";

  const client = useClient();

  const lectures = ref<Lecture[]>([]);
  const isLoading = ref<boolean>(true);
  const isError = ref<boolean>(false);

  client.lectures
    .$get()
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

  const emits = defineEmits(["push-router-list"]);
  const pushDetailPage = function (id: number) {
    emits("push-router-list", id);
  };
</script>
