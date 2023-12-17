<template>
  <div class="text-center">
    <v-dialog v-model="isShow" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> 新しい講義を登録 </v-btn>
      </template>

      <v-card class="w-96">
        <v-card-title class="headline text-primary">講義追加</v-card-title>
        <v-col>
          <UiSelect
            label="学年"
            :items="grades"
            icon="mdi-stairs-up"
            :selected="grade"
            v-model="grade"
          />
        </v-col>
        <v-col>
          <UiSelect
            label="学期"
            :items="terms"
            icon="mdi-format-list-numbered-rtl"
            :selected="term"
            v-model="term"
          />
        </v-col>
        <v-col>
          <v-text-field
            label="講義名"
            prepend-inner-icon="mdi-book"
            bg-color="#fff"
            color="#555"
            v-model="name"
          />
        </v-col>
        <v-col>
          <v-text-field
            label="教員名"
            prepend-inner-icon="mdi-account"
            bg-color="#fff"
            color="#555"
            v-model="teacherName"
          />
        </v-col>
        <v-card-actions>
          <v-btn color="primary" elevated block @click="handleAddButtonClick"
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
  import { terms } from "~~/entities/terms";
  import { grades } from "~~/entities/lecture";
  import { useClient } from "~~/util/api/useApi";
  const props = defineProps<{
    dialog: boolean;
    departmentId?: number;
  }>();
  const emit = defineEmits<{
    (event: "update:dialog", value: boolean): void;
    (event: "update:departmentId", value: number): void;
  }>();
  const isShow = computed({
    get: () => props.dialog,
    set: (value) => emit("update:dialog", value)
  });

  // POSTするデータ
  const term = ref<TermType>();
  const name = ref("");
  const teacherName = ref("");
  const grade = ref<GradeType>();

  // TODO: エラーハンドリング && エラーメッセージの表示
  //　現状の実装では、同じlectureが重複して作れてしまうが、バックエンドが対応すればエラーを返してくれるはず。
  // なので、エラーハンドリングと同じときに対応すればよい
  // データをPOSTする
  const addLecture = () => {
    const client = useClient();
    client.lectures.$post({
      body: {
        term: term.value,
        teacherName: teacherName.value,
        lectureName: name.value,
        grade: grade.value
      }
    });
  };

  const handleAddButtonClick = () => {
    addLecture();
    emit("update:dialog", false);
  };
</script>
