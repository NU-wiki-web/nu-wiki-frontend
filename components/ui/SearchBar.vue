<template>
  <v-text-field
    density="compact"
    variant="solo"
    label="講義名、教授名で講義を検索"
    append-inner-icon="mdi-magnify"
    single-line
    hide-details
    @click:append-inner="onClick"
    v-model="text"
  ></v-text-field>
</template>

<script setup lang="ts">
  interface Emits {
    (e: "click", text: string | undefined): void;
  }
  const emit = defineEmits<Emits>();

  const text = ref<string | undefined>();

  const onClick = function () {
    emit("click", text.value);
  };
</script>
