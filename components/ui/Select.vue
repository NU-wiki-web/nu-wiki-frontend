<template>
  <v-select
    :label="label"
    :items="items"
    bg-color="#fff"
    color="#555"
    :prepend-inner-icon="icon"
    v-model="onSelected"
  ></v-select>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  items: [string];
  icon: string;
  selected: string;
}
const props = defineProps<Props>();

interface Emits {
  (e: "update:selected", selected: string): void;
}
const emit = defineEmits<Emits>();

const onSelected = computed({
  get: () => props.selected,
  set: (value) => {
    emit("update:selected", value);
  },
});
</script>
