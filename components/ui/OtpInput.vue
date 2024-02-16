<script setup lang="ts">
  import { ref, watch, Ref } from "vue";
  const props = defineProps<{
    fields: number;
  }>();

  const data = ref([]);
  const firstInputEl = ref();
  const emit = defineEmits(["update:modelValue"]);

  watch(
    () => data,
    (newVal: Ref<string[]>) => {
      emit("update:modelValue", newVal.value.join(""));
    },
    { deep: true }
  );

  const handleOtpInput = (e: Event) => {
    const { target, data } = e as InputEvent;
    if (!(target instanceof HTMLInputElement)) return;
    if (data && target.nextElementSibling) {
      (target.nextElementSibling as HTMLElement).focus();
    } else if (data == null && target.previousElementSibling) {
      (target.previousElementSibling as HTMLElement).focus();
    }
  };

  const handlePaste = (e: ClipboardEvent) => {
    const pasteData = e.clipboardData ? e.clipboardData.getData("text") : "";
    let nextEl = firstInputEl.value[0].nextElementSibling;
    for (let i = 1; i < pasteData.length; i++) {
      if (nextEl) {
        data.value[i] = pasteData[i] as never;
        nextEl = nextEl.nextElementSibling;
      }
    }
  };
</script>

<template>
  <div class="otp flex w-full justify-around" @input="handleOtpInput">
    <template v-for="field in fields" :key="field">
      <input
        v-model="data[field - 1]"
        ref="firstInputEl"
        type="text"
        maxlength="1"
        class="h-10 w-8 rounded border text-center"
        @paste="field === 1 && handlePaste($event)"
      />
    </template>
  </div>
</template>
