<template>
  <div>
    <v-btn
      width="200"
      height="50"
      :prepend-icon="props.buttonIcon"
      color="#006e4f"
    >
      <template v-slot:prepend>
        <v-icon color="white"></v-icon>
      </template>
      <span class="text-white">
        {{ props.buttonTitle }}
      </span>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
// プロップス
interface Props {
  buttonTitle?: string;
  buttonIcon?: string;
}

// プロップスのデフォルト値
const props = withDefaults(defineProps<Props>(), {
  buttonTitle: "ファイルを選択",
  buttonIcon: "mdi-cloud-upload",
});
</script>
