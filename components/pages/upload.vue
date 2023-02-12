<script setup lang="ts">
import { useFetch, useClient } from "~/util/api/useApi";
const { res, error } = await useFetch(() => {
  const client = useClient();
  return client.get();
});
</script>
<template>{{ res }}</template>
