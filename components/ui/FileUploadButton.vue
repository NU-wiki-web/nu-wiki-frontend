// 参考 https://qiita.com/Domao/items/f742be456b3ac0da52c3

<template>
  <v-file-input
    v-model="pastExam"
    underline
    clearable
    :label="props.label"
    :accept="props.accept"
    placeholder="place"
  ></v-file-input>
</template>

<script setup lang="ts">
  interface Props {
    label?: string;
    buttonIcon?: string;
    accept?: string;
    files: File[];
  }

  // プロップスのデフォルト値
  const props = withDefaults(defineProps<Props>(), {
    label: "input",
    accept: "application/pdf"
  });

  // ファイル転送処理
  interface Emits {
    (e: "update:files", value: File[]): void;
  }
  const emits = defineEmits<Emits>();

  const pastExam = computed({
    get: () => props.files,
    set: (value) => emits("update:files", value)
  });
</script>
