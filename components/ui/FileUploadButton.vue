<template>
  <v-btn
    depressed
    @dragover.prevent="isDragged = true"
    @dragleave.prevent="isDragged = false"
    @drop.prevent="onFileDropped"
    @click="openFileSelect"
    height="100%"
    width="100%"
    color="info"
    class="text-none"
    :variant="!isDragged ? 'flat' : 'outlined'"
  >
    <v-progress-circular v-if="isSelecting" class="mx-12 my-6" indeterminate color="white" />

    <v-row v-if="!isSelecting" class="text-center" justify="center" color="info">
      <v-col class="mb-n2 mt-2" cols="10">
        <v-icon size="40">{{ props.buttonIcon }}</v-icon>
      </v-col>
      <v-col class="text-trucate mt-n2 mb-2" cols="10">
        {{ displayText }}
      </v-col>
    </v-row>
  </v-btn>
  <input ref="uploader" class="d-none" type="file" :accept="props.accept" @change="onFileSelectChange" />
</template>

<script setup lang="ts">
// 参考 https://qiita.com/Domao/items/f742be456b3ac0da52c3
// プロップス
interface Props {
  file: File;
  buttonTitle?: string;
  buttonIcon?: string;
  accept?: string;
}

// プロップスのデフォルト値
const props = withDefaults(defineProps<Props>(), {
  fileProp: undefined,
  buttonTitle: "ファイルを選択",
  buttonIcon: "mdi-cloud-upload",
  accept: "application/pdf",
});

// ファイル転送処理
interface Emits {
  (e: "update:file", value: File): void;
}
const emits = defineEmits<Emits>();

// ファイルがアップロードされているかどうか
const isSelecting = ref<boolean>(false);
// ボタンにファイルがドラッグされているかどうか
const isDragged = ref<boolean>(false);
// アップロードされているファイル
const selectedFile = ref<File | null>(null);

// ボタンに表示するテキスト
const displayText = computed(() => {
  switch (true) {
    case isDragged.value:
      return "離すとアップロード";
    case selectedFile.value != null:
      return selectedFile.value!.name;
    default:
      return props.buttonTitle;
  }
});

// ボタンクリックでファイル選択を開く
const uploader = ref<HTMLInputElement>();
const openFileSelect = () => {
  isSelecting.value = true;
  window.addEventListener(
    "focus",
    () => {
      isSelecting.value = false;
    },
    { once: true }
  );
  uploader.value?.click();
};

// ファイル選択確定時にEmit
const onFileSelectChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const files = target.files;
  const file = files![0];
  selectedFile.value = file;
  console.log(file);
  emits("update:file", file);
};

// D&D時にEmit
const onFileDropped = (e: DragEvent) => {
  isDragged.value = false;
  if (!e) {
    return;
  }

  if (!e.dataTransfer) {
    return;
  }

  if (e.dataTransfer.files.length === 0) {
    return;
  }
  const file = e.dataTransfer.files[0];
  selectedFile.value = file;
  console.log(file);
  emits("update:file", file);
};
</script>
