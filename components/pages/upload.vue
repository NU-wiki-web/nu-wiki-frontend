<script setup lang="ts">
import { useFetch, useClient } from "~/util/api/useApi";

// res, errorはref
const { res, error, loading } = await useFetch(() => {
  const client = useClient();
  return client.$get();
});
</script>
<template>
  <div>
    <div v-if="loading">
      <UiLoading />
    </div>
    <div v-else>
      {{ res.message }}
    </div>
    <div>
      {{ error }}
    </div>
  </div>
</template>
