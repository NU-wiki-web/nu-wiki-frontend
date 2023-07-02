<template>
  <div class="flex">
    <label class="block flex items-center pr-4 text-xl text-white">
      {{ label }}
    </label>
    <v-text-field
      density="compact"
      variant="solo"
      :placeholder="placeholder"
      single-line
      hide-details
      v-model="text"
    />
  </div>
</template>

<script setup lang="ts">
interface Emits {
  (e: "click", text: string | undefined): void;
}
const emit = defineEmits<Emits>();

defineProps<{
  label?: string;
  placeholder?: string;
}>();

const text = ref<string | undefined>();

const onClick = function () {
  emit("click", text.value);
};
</script>
