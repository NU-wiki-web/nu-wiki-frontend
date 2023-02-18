<template>
  <Base v-bind="$attrs">
    <slot />
  </Base>
</template>

<script setup lang="ts">
import Base from "./_Base.vue";
</script>
