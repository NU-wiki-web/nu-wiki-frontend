<template>
  <div class="flex flex-row items-center gap-8">
    <div class="text-white">
      {{ title }}
    </div>
    <v-text-field
      density="compact"
      variant="solo"
      single-line
      hide-details
      :label="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
  interface Props {
    title: string;
    placeholder: string;
    modelValue: string | undefined;
  }
  const props = defineProps<Props>();
</script>
