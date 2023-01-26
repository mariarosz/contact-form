<script setup>
import { useIsFormValid, useIsFieldDirty } from "vee-validate";
import { computed } from "vue";

const isValid = useIsFormValid();
const isDirty = useIsFieldDirty();

const isDisabled = computed(() => {
  return !isDirty.value || !isValid.value;
});
</script>

<template>
  <button
    :disabled="isDisabled"
    class="rounded-full w-1/2 border border-transparent bg-sky-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:opacity-65 disabled:bg-gray-400"
  >
    Send
  </button>
</template>
