<template>
  <PagesLecture @push-router-list="onClick"></PagesLecture>
</template>

<script setup lang="ts">
  const onClick = (id: string) => {
    const router = useRouter();
    router.push(`/pdf-list/${id}`);
  };
</script>
