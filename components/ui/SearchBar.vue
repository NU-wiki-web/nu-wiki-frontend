<template>
  <v-text-field
    :loading="loading"
    density="compact"
    variant="solo"
    label="Search templates"
    append-inner-icon="mdi-magnify"
    single-line
    hide-details
    @click:append-inner="handleClick"
    v-model="input"
  ></v-text-field>
</template>

<script setup lang="ts">
interface Props {
  handleClick: () => void;
  text: string | undefined;
}
const props = defineProps<Props>();

// 検索が発火されるときにだけ更新した方がいいかも。
interface Emits {
  (e: "update:text", text: string | undefined): void;
}
const emit = defineEmits<Emits>();

const input = computed({
  get: () => props.text,
  set: (value) => {
    console.log(value);
    emit("update:text", value);
  },
});
</script>
